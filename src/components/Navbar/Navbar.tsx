// components/Navbar.tsx
import React from "react";

const Navbar = () => {
  return (
    <nav className=" absolute pt-10 left-10 w-[80vw] lg:left-[10%]">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-2 ">
          <span className="w-10 text-xl font-bold rounded-full p-2 justify-center bg-[#D7BE7E]/20 text-[#F35D57] flex items-centers h-10">
            Mb
          </span>
          <h1 className="text-4xl font-semibold"> Mafiabeatz</h1>
        </div>
        <div className=" md:flex space-x-4">
          <a
            href="#"
            className="text-[#000] text-2xl  font-semibold hover:underline"
          >
            HOme
          </a>
          <a
            href="#"
            className="text-[#000] text-2xl  font- font-semibold hover:underline"
          >
            AboUt
          </a>
          <a
            href="#"
            className="text-[#000] text-2xl  font-semibold  hover:underline"
          >
            ServIces
          </a>
          <a
            href="#"
            className="text-[#000] text-2xl  font-semibold  hover:underline"
          >
            ConTact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
