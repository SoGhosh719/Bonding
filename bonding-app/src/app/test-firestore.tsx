"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function FirestoreTest() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const userList = querySnapshot.docs.map((doc) => doc.data());
      setUsers(userList);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Firestore Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index} className="border p-2 mb-2">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
