// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPTKtVav9dZ36ZQS5tuUQXqxZ4ZnQOv4Q",
  authDomain: "bondingapp-1fbcf.firebaseapp.com",
  projectId: "bondingapp-1fbcf",
  storageBucket: "bondingapp-1fbcf.firebasestorage.app",
  messagingSenderId: "120363463977",
  appId: "1:120363463977:web:ec8d04b8307a3ae8883338",
  measurementId: "G-SSRVF4KTVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { auth,db }
