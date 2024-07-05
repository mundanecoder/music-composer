"use client";
import { Skeleton } from "../ui/skeleton";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Artist {
  id: string;
  name: string;
  shareUrl: string;
  type: string;
}

interface Cover {
  height: number;
  url: string;
  width: number;
}

interface Album {
  artists: Artist[];
  cover: Cover[];
  date: string;
  id: string;
  name: string;
  shareUrl: string;
  type: string;
}

export interface Albums {
  items: Album[];
}

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [music, setMusic] = useState<Album[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handlePrevClick = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : music.length - 1
      );
    }
  };

  const handleNextClick = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setCurrentIndex((prevIndex) =>
        prevIndex < music.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  const handleAlbumClick = (id: string) => {
    router.push(`/collection/${id}`);
  };

  const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <section className="embla relative flex justify-center mt-12 py-10">
      <div
        className="embla__viewport relative overflow-hidden w-full h-[60vh] sm:h-[90vh] md:h-[96vh] lg:h-[70vh]"
        ref={emblaRef}
      >
        <div className="embla__container flex gap-4 items-center">
          {!music.length
            ? dummy.map((item, index) => (
                <div
                  className={`embla__slide flex-none w-4/5 h-[45vh] sm:w-2/5 md:w-1/6 lg:w-2/12  rounded-3xl transition filter   ${
                    index % 2 === 0 ? "mb-10" : "mt-10"
                  } `}
                  key={index}
                >
                  <div className="w-full h-full relative bg-gray-200 rounded-3xl">
                    <Skeleton className="text-white absolute top-20 w-[48vw] sm:w-[11vw] left-4 h-[3vh] bg-[#B37D0B]/30 p-2 rounded-xl transition-all duration-300 ease-in-out" />
                    <div>
                      <Skeleton className="text-white absolute top-28  lg:top-32 w-[48vw] sm:w-[11vw] left-4 h-[3vh] bg-[#B37D0B]/30 p-2 rounded-xl transition-all duration-300 ease-in-out" />
                    </div>

                    <div className="absolute h-2/8 sm:w-full   bottom-4 left-[4.5%] sm:left-[8%] lg:left-[%] ">
                      <Link href={`/collection/${index}`}>
                        <Skeleton className="text-white absolute bottom-20 w-[30vw] sm:w-[6vw] left-10 sm:left-12 h-[3vh] bg-[#B37D0B]/30 p-2 rounded-xl hover:bg-red-500/70 transition-all duration-300 ease-in-out" />
                      </Link>
                      <Skeleton className="  bg-[#B37D0B]/30 h-[3vh] w-[51vw] sm:w-[10.5vw]  rounded-2xl " />
                    </div>
                  </div>
                </div>
              ))
            : music.map((album, index) => (
                <div
                  className={`embla__slide flex-none w-3/5 h-[50vh] sm:w-2/5 md:w-1/3 lg:w-2/12 bg-cover bg-center rounded-3xl transition filter grayscale hover:grayscale-0 ${
                    index % 2 === 0 ? "mb-10" : "mt-10"
                  } `}
                  key={album.id}
                  style={{
                    backgroundImage: `url(${album.cover[2].url})`,
                  }}
                >
                  <div className="embla__slide__content p-4">
                    <h2 className="text-white">{album.name}</h2>
                  </div>
                  <button
                    className="text-white absolute bottom-20 left-36 bg-red-500/50 p-2 rounded-xl hover:bg-red-500/70 transition-all duration-300 ease-in-out"
                    onClick={() => handleAlbumClick(album.id)}
                  >
                    Buy this
                  </button>
                  <div className="absolute h-2/8 sm:w-full bg-transparent rounded-2xl bottom-4 left-[4.5%] sm:left-[8%] lg:left-[10%] ">
                    <audio controls className="w-full lg:w-72 bg-transparent">
                      <source
                        src={album.shareUrl}
                        type="audio/ogg"
                        className=""
                      />
                      <source src="horse.mp3" type="audio/mpeg" />
                      Your browser does not support the audio tag.
                    </audio>
                  </div>
                </div>
              ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button
          className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors duration-300"
          onClick={handlePrevClick}
        >
          <ChevronLeft className="text-gray-600" />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button
          className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors duration-300"
          onClick={handleNextClick}
        >
          <ChevronRight className="text-gray-600" />
        </button>
      </div>
    </section>
  );
};

export default EmblaCarousel;
