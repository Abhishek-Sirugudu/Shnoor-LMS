import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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
export const auth = getAuth(app);