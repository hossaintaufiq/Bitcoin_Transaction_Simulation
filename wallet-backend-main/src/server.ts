// /* eslint-disable no-console */
// import { Server } from 'http'
// import app from './app'
// import config from './app/config'
// import mongoose from 'mongoose'

// let server: Server

// async function main() {
//   try {
//     await mongoose.connect(config.url as string)
//     server = app.listen(config.port, () => {
//       console.log(`Example app listening on port ${config.port}`)
//     })
//   } catch (err) {
//     console.log(err)
//   }
// }

// main()
// process.on('unhandledRejection', () => {
//   console.log(`😈 unahandledRejection is detected , shutting down ...`)

//   if (server) {
//     server.close(() => {
//       process.exit(1)
//     })
//   }
//   process.exit(1)
// })

// process.on('uncaughtException', () => {
//   console.log(`😈 uncaughtException is detected , shutting down ...`)
//   process.exit(1)
// })


/* eslint-disable no-console */
import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

let server: Server;

async function bootstrap() {
  try {
    // Connect to MongoDB
    await mongoose.connect(config.url as string);
    console.log('📦 Database connected successfully');

    // Start server
    server = app.listen(config.port, () => {
      console.log(`🚀 Server running on http://localhost:${config.port}`);
    });

  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

// Graceful shutdown function
const shutdown = async () => {
  console.log('\n🛑 Shutting down gracefully...');

  try {
    // Disconnect from database
    await mongoose.disconnect();
    console.log('📦 Database connection closed');

    // Stop server
    if (server) {
      server.close(() => {
        console.log('🚫 Server stopped');
        process.exit(0);
      });
    }
  } catch (error) {
    console.error('❌ Error during shutdown:', error);
    process.exit(1);
  }
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (error: Error) => {
  console.error('⚠️ Unhandled Rejection:', error.message);
  shutdown();
});

// Handle uncaught exceptions
process.on('uncaughtException', (error: Error) => {
  console.error('⚠️ Uncaught Exception:', error.message);
  shutdown();
});

// Handle SIGINT/SIGTERM
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

// Start application
bootstrap();
