"use client";
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function TestFirestore() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const querySnapshot = await getDocs(collection(db, "messages"));
      setMessages(querySnapshot.docs.map((doc) => doc.data()));
    };
    fetchMessages();
  }, []);

  const addMessage = async () => {
    await addDoc(collection(db, "messages"), { text: "Hello, Firestore!" });
    alert("Message added!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Firestore Test</h1>
      <button
        onClick={addMessage}
        className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md"
      >
        Add Message
      </button>
      <ul className="mt-4">
        {messages.map((msg, index) => (
          <li key={index} className="text-lg">
            {msg.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
