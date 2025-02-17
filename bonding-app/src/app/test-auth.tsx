"use client";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../lib/firebase";

export default function TestAuth() {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
    } catch (error) {
      console.error("Authentication Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Firebase Auth Test</h1>
      <button
        onClick={handleSignIn}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md"
      >
        Sign in with Google
      </button>
    </div>
  );
}
