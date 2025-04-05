# 📚 BOOKLOVER Back-End

_This is a backend application for Blog web app. The application is created using typescript, express, mongoose. Used MongoDb atlas for database. It has maximum number of crud operation that an Blog web application needed._

---

## 🚀 Live Demo

🌐 [Click here to view the live version](https://assignment-3-six-psi.vercel.app/)

---

## ✨ Features

✅ **Feature 1**: Can register user using their necessery document.  
✅ **Feature 2**: After register and login user can place order for buying book, see their dashboard, update password
✅ **Feature 3**: Admin can make any user blocked and can delete any blog.

---

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

- 🟢 [Node.js](https://nodejs.org/) (v16+)
- 🗄️ [MongoDB](https://www.mongodb.com/) (or a MongoDB Atlas cluster)

---

## 🛠️ Installation

### Step 1: Clone the repository

```bash
git https://github.com/Minhajul-Shobuj/level-2-assingnment-3
cd your-repository-name

```

### Step 2: Install dependencies

```bash
npm install

```

### Step 3: Setup Environment Variables

Create a .env file in the root directory and add your environment variables:

```
NODE_ENV=development
PORT=3000
MONGO_URI=your-mongodb-uri

```

▶️ Usage
Development Server:
Start the development server:

```bash
npm run dev
```

Production Server:

1. Build the project:

```bash
npm run build
```

2. Start the server:

```bash
npm start
```

📖 API Endpoints

👨🏻‍💼 User

1. POST /api/auth/register: Register User.
2. POST /api/auth/login: Login User.

👮 Admin

3. PATCH /api/admin/users/:userId/block: Block User.

🫂 Public

8. GET /api/books: Get All Books (Public)

🔧 Scripts

1. npm run dev: Start the development server.
2. npm run build: Build the project.
3. npm start: Start the production server.

🤝 Contributing
Contributions are welcome! Follow these steps to contribute:

Fork the repository.
Create a new branch:

```bash
git checkout -b feature-branch
Make changes and commit:
```

```bash
git commit -m "Add feature or fix bug"
Push changes to your fork:
```

```bash
git push origin feature-branch
```

Submit a pull request.

🙏 Acknowledgments
Special thanks to [Programming Hero](https://github.com/ProgrammingHero1) for guidance and support.

<H1>🌟 Don't forget to star ⭐ the repository if you found this helpful!</H1>
