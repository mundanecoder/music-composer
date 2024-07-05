"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PocketBase from "pocketbase";

export interface IUser {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function CreateUser() {
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const pb = new PocketBase("http://127.0.0.1:8090");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const create = async (): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const record = await pb.collection("users").create(user);

      console.log("Record created:", record); // Add logging here

      router.push("/user/7xk6jo2zgypul92");
    } catch (err) {
      console.error("Error:", err); // Add logging here

      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
      setUser({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
      });
    }
  };

  return (
    <div className="h-[90vh] m-5 flex flex-col justify-center items-center">
      <div className="flex flex-col border shadow-xl p-2 h-[30vh] justify-start pt-10  w-[60vw] sm:w-[20vw] rounded-xl">
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          className="mb-2 pl-2 py-2 "
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={user.email}
          className="mb-2 pl-2 py-2 "
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          className="mb-2 pl-2 py-2 "
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <input
          type="password"
          placeholder="confirm password"
          value={user.passwordConfirm}
          className="mb-2 pl-2 py-2 "
          onChange={(e) =>
            setUser({ ...user, passwordConfirm: e.target.value })
          }
        />
        <button
          onClick={create}
          disabled={loading}
          className="bg-gray-700 py-1 rounded-xl w-[60%] flex self-center justify-center items-center text-white hover:bg-slate-600"
        >
          {loading ? "Creating..." : "Create"}
        </button>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      </div>
    </div>
  );
}
