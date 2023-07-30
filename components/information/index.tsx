import React from "react";
import Contact from "../contact";

export default function Information() {
  return (
    <div className="md:fixed top-0 left-0 h-full w-[100%] md:w-[30%] md:pl-[7%]  pt-[5vh] md:py-[3%] flex flex-col justify-center md:gap-0 gap-[5vh] md:justify-between ">
      <div className="text-md md:text-[calc(.8vw+.8vh)] pl-[7%] md:pl-0 w-[93%] ">
        <h1 className="text-7xl md:text-[calc(2.5vw+2.5vh)] font-semibold">
          Ahmed Shobky
        </h1>
        <h2 className="mt-[3vh]">
          <span className="font-semibold">Software Developer,</span> loves to
          create things.
        </h2>
        <p>Click on mario for more information!</p>
      </div>
      <Contact />
    </div>
  );
}
