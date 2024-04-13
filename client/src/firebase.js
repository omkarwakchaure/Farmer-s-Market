// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-market-b9679.firebaseapp.com",
  projectId: "mern-market-b9679",
  storageBucket: "mern-market-b9679.appspot.com",
  messagingSenderId: "50356550155",
  appId: "1:50356550155:web:8641f90af24968acc7e50e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);