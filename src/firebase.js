// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";       // <--- REQUIRED
import { getFirestore } from "firebase/firestore";                 // <--- REQUIRED

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpZO0Dur9Uh7uoamVzHlQtXFf6NHrmn-w",
  authDomain: "shnoor-lms.firebaseapp.com",
  projectId: "shnoor-lms",
  storageBucket: "shnoor-lms.firebasestorage.app",
  messagingSenderId: "97142691230",
  appId: "1:97142691230:web:11699afa66b1d3b6f8f28f",
  measurementId: "G-CL09Q2SGB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// --- CRITICAL EXPORTS (Do not delete these lines) ---
export const auth = getAuth(app);                   // Export Auth for Login/Register
export const googleProvider = new GoogleAuthProvider(); // Export Google Provider
export const db = getFirestore(app);                // Export Database for Roles/School Names