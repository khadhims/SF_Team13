// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0g71JXUPi0-up0sUe7LW_IYAi6ZpO_KQ",
  authDomain: "sisfor-team13.firebaseapp.com",
  projectId: "sisfor-team13",
  storageBucket: "sisfor-team13.firebasestorage.app",
  messagingSenderId: "1064378346553",
  appId: "1:1064378346553:web:62d89bb888ad50d116b1e8",
  measurementId: "G-B7HQLB91QF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, db, googleProvider };