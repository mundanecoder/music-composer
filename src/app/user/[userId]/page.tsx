"use client";

import React, { useEffect, useState } from "react";
import { RecordModel } from "pocketbase";
import PocketBase from "pocketbase";
import axios from "axios";

const SlugPage = ({ params }: { params: { userId: string } }) => {
  const [userData, setUserData] = useState<RecordModel>({} as RecordModel);
  const pb = new PocketBase("http://127.0.0.1:8090");

  const { userId } = params;

  useEffect(() => {
    fetchData(userId);
  }, [userId]);

  async function fetchData(userId: string) {
    try {
      const res = await pb
        .collection("users")
        .requestVerification("koiran@gmail.com");

      console.log(res, "data");

      const response = await axios.get(
        `http://127.0.0.1:8090/api/collections/users/records/${userId}`,
        {}
      );
      setUserData(response.data);

      console.log(response, "user");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  console.log(userData);

  return (
    <div>
      <h1>Slug Page</h1>
      <h1>{userId}</h1>
      {/* <div>
        <p>{userData.name}</p>
        <p>{userData.email}</p>
      </div> */}
    </div>
  );
};

export default SlugPage;

// const UserBasedOnId = () => {
//   return <div>slug</div>;
// };

// export default UserBasedOnId;
