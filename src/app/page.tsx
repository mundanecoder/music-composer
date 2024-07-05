import EmblaCarousel from "@/components/carousel";
import React from "react";

export default function Home() {
  return (
    <div className=" h-[100screen]  flex  flex-col py-10 justify-center mt-16 lg:mt-16 ">
      <div className=" font-airstone relative flex bg-[#B37D0B]/30 lg:px-16  pt-28 text-[#F35D57] self-center w-[96%]  lg:w-[92%] h-[70vh] stroke-slate-900 lg:flex-col   rounded-full ">
        <h1 className="absolute lg:-left-8 left-10 text-[20vw]  lg:text-9xl z-500 ">
          Mafia beatz
          <span className="  absolute left-0 right-0 bottom-0 h-1 bg-[rgb(246,90,88)] group-hover:w-full transition-transform origin-left transform scale-x-0"></span>
        </h1>
        <p className="text-black text-2xl md:text-3xl ml-2 lg:text-5xl absolute lg:-left-10 mt-[90%] md:mt-[90%] left-6 font-semibold lg:mt-[10%]">
          Where beats come to life and uplift your soul. Find your perfect track
          today.
        </p>

        <div className="lg:h-[48%]  absolute lg:w-[30vw] top-52 right-20 lg:right-14 lg:top-20 ">
          <img src="/artist1.png" alt="artist" className="w-[90%] h-full" />
        </div>
        {/* <div className="h-[18%] border absolute w-[30vw] right-14 bottom-72 bg-[#FBFFF0] blur-3xl" /> */}

        <div className="h-screen ml-12 w-[70vw] justify-center lg:w-[90%] self-center mt-[275%] lg:mt-52">
          <EmblaCarousel />
        </div>
      </div>

      <div className="p-2 flex justify-center border  h-[100vh] mt-52 px-8 ">
        {/* <h1 className="text-3xl font-semibold">About us</h1>
        <p className="text-lg">
          Mafiabeatz is a music production company that specializes in creating
          beats for artists. We have a team of experienced producers who have
          worked with some of the biggest names in the industry. Our goal is to
          provide artists with high-quality beats that will help them take their
          music to the next level. Whether you're a rapper, singer, or producer,
          we have the perfect beat for you. Check out our catalog today and find
          the perfect track for your next project.
        </p> */}
      </div>
    </div>
  );
}
