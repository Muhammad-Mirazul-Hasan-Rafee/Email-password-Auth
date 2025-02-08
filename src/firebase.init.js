// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEK6tcXjz6V2kta-bRATFqUGrbqQp6sDI",
  authDomain: "email-password-auth-4ecbb.firebaseapp.com",
  projectId: "email-password-auth-4ecbb",
  storageBucket: "email-password-auth-4ecbb.firebasestorage.app",
  messagingSenderId: "890474336306",
  appId: "1:890474336306:web:e4766707d51f883225ac2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);