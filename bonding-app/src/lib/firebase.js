// Import Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_nPEyaxES5uswl9lzCfMYeb618a48Ojw",
  authDomain: "bonding-f2d8d.firebaseapp.com",
  projectId: "bonding-f2d8d",
  storageBucket: "bonding-f2d8d.firebasestorage.app",
  messagingSenderId: "257752909599",
  appId: "1:257752909599:web:c75f54ff9f5ccc367b122a",
  measurementId: "G-DWG4PPJ978"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Initialize Firestore Database
const db = getFirestore(app);

// Initialize Analytics (optional)
const analytics = getAnalytics(app);

// Export Firebase functions for use in your app
export { auth, provider, db, analytics };
