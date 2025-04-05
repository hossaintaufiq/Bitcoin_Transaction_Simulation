// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFRSo-qcOAdoDQMpBEscwcc-q2V9BHfls",
  authDomain: "bitcoin-transaction-simulation.firebaseapp.com",
  projectId: "bitcoin-transaction-simulation",
  storageBucket: "bitcoin-transaction-simulation.firebasestorage.app",
  messagingSenderId: "543005319562",
  appId: "1:543005319562:web:97c241d42ba5aa9e5e6873",
  measurementId: "G-12SS2W14C3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth= getAuth(app);

export {auth,app}; 