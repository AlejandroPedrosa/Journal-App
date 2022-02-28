import "firebase/firestore";
import "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-6fDyQqMgkg2BjC18PrDEAjehFd72byQ",
  authDomain: "journal-app-1cdd1.firebaseapp.com",
  projectId: "journal-app-1cdd1",
  storageBucket: "journal-app-1cdd1.appspot.com",
  messagingSenderId: "289340133536",
  appId: "1:289340133536:web:c28744c9375386f36979c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider };
