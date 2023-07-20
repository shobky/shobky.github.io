import React from "react";
import Contact from "../contact";

export default function Information() {
  return (
    <div className="md:fixed top-0 left-0 h-full w-[100%] md:w-[30%] pl-[7%]  py-[5vh] md:py-[3%] flex flex-col justify-center md:gap-0 gap-[5vh] md:justify-between ">
      <div>
        <h1 className="text-7xl md:text-[calc(2.5vw+2.5vh)] leading-[9vh] lg:leading-[7vh] font-semibold">
          Ahmed Shobky
        </h1>
        <h2 className="text-lg md:text-[calc(1vw+1vh)] mt-[4vh] md:mt-[2vh] w-[95%] font-light ">
          <span className="font-medium">Software Developer,</span>{" "}
          <span className="text-lg md:text-[calc(.8vw+.8vh)]">
            loves to create things.
          </span> 
          <br/>
        </h2>
        <p className="md:text-[calc(.8vw+.8vh)] w-[95%]">Click mario for contact, More info on <a className="underline" target="blank" href="https://linkedin.com/in/ahmed-shobky">Linkedin</a></p>

      </div>
      <div className="w-[100%] md:w-full ">
        <Contact />
      </div>
      {/* <p className="absolute bottom-4 text-xs ">Click on mario for my contacts.</p> */}
    </div>
  );
}
