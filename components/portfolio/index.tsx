"use client";

import { MouseEvent } from "react";

export default function Portfolio() {
  return (
    <div className="  md:float-right flex flex-wrap mr-[5%] w-full md:w-[54%]  h-full  bg-black relative overflow-hidden    ">
      <div className=" square ease-in-out duration-75 bg-black w-1/2 aspect-square">
        <h1 className="text-white flex justify-center items-center h-full text-[calc(1.5vw+1.5vh)] font-medium">
          Spotin
        </h1>
      </div>
      <div className=" square ease-in-out duration-75 bg-orange-400 w-1/2 aspect-square">
        <h1 className="text-white flex justify-center items-center h-full text-[calc(1.5vw+1.5vh)] font-medium">
          Solimania
        </h1>
      </div>
      <div className=" square ease-in-out duration-75 bg-red-300 w-1/2 aspect-square">
        <h1 className="text-black flex justify-center items-center h-full text-[calc(1.5vw+1.5vh)] font-medium">
          Honor
        </h1>
      </div>
      <div className=" square ease-in-out duration-75 bg-green-100 w-1/2 aspect-square">
        <h1 className="text-black flex justify-center items-center h-full text-[calc(1.5vw+1.5vh)] font-medium">
          Touchfingers
        </h1>
      </div>
      <div className=" square ease-in-out duration-75 bg-lime-500 w-1/2 aspect-square">
        <h1 className="text-white flex justify-center items-center h-full text-[calc(1.5vw+1.5vh)] font-medium">
          AMS
        </h1>
      </div>
      <div className=" square ease-in-out duration-75 bg-violet-800 w-1/2 aspect-square">
        <h1 className="text-white flex justify-center items-center h-full text-[calc(1.5vw+1.5vh)] font-medium">
          Spotin
        </h1>
      </div>
    </div>
  );
}
