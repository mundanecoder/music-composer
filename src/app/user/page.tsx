"use client";
import PocketBase from "pocketbase";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { IUser } from "./createUser";

interface IUserExtra extends IUser {
  id: string;
  created: string;
  updated: string;
}

const CreateUser = dynamic(() => import("./createUser"), { ssr: false });

const pb = new PocketBase("http://127.0.0.1:8090");

const CreateUserPage = () => {
  const [users, setUsers] = useState<IUserExtra[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setMounted(true);

    fetchUserData();

    return () => {
      setMounted(false); // Cleanup to prevent state updates on unmounted component
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const fetchUserData = async () => {
    try {
      const response = await pb.collection("users").getFullList();

      if (mounted) {
        setUsers(response);
      }
    } catch (error) {
      console.error("Error:", error);

      if (mounted) {
        setError("An error occurred while fetching user data.");
      }
    }
  };
  const handleRefresh = () => {
    setError(null);
    setUsers([]);
    fetchUserData();
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div>
        <button
          onClick={handleRefresh}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Refresh User Data
        </button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      <div className="mt-4">
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id} className="text-gray-800">
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No users found.</p>
        )}
      </div>
      <CreateUser />
    </div>
  );
};

export default CreateUserPage;
