// import express, { Express, Request, Response } from 'express'
// import cors from 'cors'
// import cookieParser from 'cookie-parser'
// import notFound from './app/middlewares/notFound'
// import globalErrorHandler from './app/middlewares/globalErrorHandler'
// import { WalletRoute } from './app/modules/wallet/wallet.route'

// const app: Express = express()
// //parser
// app.use(express.json())
// app.use(cookieParser())

// app.use(
//   cors({
//     origin: ['http://localhost:5173'],
//     credentials: true,
//   }),
// )

// app.use('/api/wallet', WalletRoute)
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello From Backend😉')
// })

// app.use(globalErrorHandler)
// app.use(notFound)
// export default app

import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { WalletRoute } from './app/modules/wallet/wallet.route';

const app: Express = express();

// -------- Security Headers Middleware --------
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Cross-Origin-Opener-Policy', 'same-origin');
  res.header('Cross-Origin-Embedder-Policy', 'require-corp');
  res.header('Cross-Origin-Resource-Policy', 'cross-origin');
  res.header('X-Content-Type-Options', 'nosniff');
  next();
});

// -------- CORS Configuration --------
app.use(cors({
  origin: ['http://localhost:5173'], // frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// -------- Body Parsers --------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// -------- Custom Request Type Check Middleware --------
app.use((req: Request, res: Response, next: NextFunction) => {
  if (['POST', 'PUT'].includes(req.method)) {
    if (!req.is('application/json')) {
      return res.status(400).json({
        success: false,
        message: 'Invalid content type. Only application/json is accepted'
      });
    }
  }
  next();
});

// -------- API Routes --------
app.use('/api/wallet', WalletRoute);

// -------- Health Check Endpoint --------
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

// -------- Root Endpoint --------
app.get('/', (req: Request, res: Response) => {
  res.send('✅ Server is running');
});

// -------- Error Handling Middlewares --------
app.use(globalErrorHandler);
app.use(notFound);

export default app;
