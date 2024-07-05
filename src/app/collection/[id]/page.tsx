import React from "react";

interface IParams {
  id: string;
}

const page = ({ params }: { params: IParams }) => {
  const { id } = params;

  console.log(id);
  return (
    <div className="mt-20 text-2xl flex justify-center">
      page {params.id.toString()} {id}
    </div>
  );
};

export default page;
