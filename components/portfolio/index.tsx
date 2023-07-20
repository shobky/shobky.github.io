"use client";
import touchfingers from "@/public/touchfingers.png";
import solymaneya from "@/public/solymaneya.png";
import spotin from "@/public/spotin.png";
import ams from "@/public/ams.png";
import honor from "@/public/honor.png";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className=" portfolio-wrapper  md:float-right flex flex-wrap mr-[5%] w-full md:w-[54%] 2xl:absolute 2xl:right-0    bg-black relative overflow-hidden    ">
      <div className="square-container relative square ease-in-out duration-75  w-1/2 aspect-square">
        <Image
          src={touchfingers}
          width="800"
          height="300"
          alt="demo"
          className="absolute object-cover w-full h-full square-img opacity-75 hover:opacity-0 duration-75"
        />
        <h1 className="text-white flex flex-col justify-center items-center h-full text-[calc(1.5vw+1.5vh)] font-medium z-10">
          <a
            href="https://touchfingers.vercel.app"
            target="blank"
            className=" mix-blend-difference"
          >
            Touchfingers{" "}
          </a>
          <p className="text-white text-lg text-center  font-light -mb-10 opacity-0  ease-in-out duration-75">
            Typing speed test, Click to see demo on pc
          </p>
        </h1>
      </div>
      <div className=" square-container relative ease-in-out duration-75  w-1/2 aspect-square">
        <Image
          src={solymaneya}
          width="800"
          height="300"
          alt="demo"
          className="absolute object-cover w-full h-full square-img opacity-75 hover:opacity-0 duration-75"
        />
        <h1 className="text-white flex flex-col justify-center items-center h-full text-[calc(1.5vw+1.5vh)] font-medium">
          <a
            href="https://solymaneya.com"
            target="blank"
            className=" mix-blend-difference"
          >
            Solimania{" "}
          </a>
          <p className="text-white text-lg text-center  font-light -mb-10 opacity-0  ease-in-out duration-75">
           Company catalog & i18n translation arabic & english.
          </p>
        </h1>
      </div>
      <div className=" square-container relative ease-in-out duration-75 w-1/2 aspect-square">
        <Image
          src={honor}
          width="800"
          height="300"
          alt="demo"
          className="absolute object-cover w-full h-full square-img opacity-75 hover:opacity-0 duration-75"
        />
        <h1 className="text-white flex flex-col justify-center items-center h-full text-[calc(1.5vw+1.5vh)] font-medium">
          <a
            href="https://honor-two.vercel.app"
            target="blank"
            className=" mix-blend-difference"
          >
            Honor{" "}
          </a>
          <p className="text-white text-lg text-center  font-light -mb-10 opacity-0  ease-in-out duration-75">
          Corporate website, with interactive caroucel 
          </p>
        </h1>
      </div>

      <div className=" square-container relative ease-in-out duration-75 w-1/2 aspect-square">
        <Image
          src={spotin}
          width="800"
          height="300"
          alt="demo"
          className="absolute object-cover w-full h-full square-img opacity-75 hover:opacity-0 duration-75"
        />
        <h1 className="text-white flex flex-col justify-center items-center h-full text-[calc(1.5vw+1.5vh)] font-medium">
          <a
            href="http://spotin.onrender.com/admin/dashboard"
            target="blank"
            className=" mix-blend-difference"
          >
            Spotin
          </a>
          <p className="text-white text-lg text-center  font-light -mb-10 opacity-0  ease-in-out duration-75">
            Small full-stack POS with MERN, {`(onrender loads data slowly)`}
          </p>
        </h1>
      </div>
      <div className=" square-container relative ease-in-out duration-75 w-1/2 aspect-square">
        <Image
          src={touchfingers}
          width="800"
          height="300"
          alt="demo"
          className="absolute object-cover w-full h-full square-img opacity-75 hover:opacity-0 duration-75"
        />
        <h1 className="text-white flex flex-col justify-center items-center h-full text-[calc(1.5vw+1.5vh)] font-medium">
          <a
            href="https://alammar-marine.vercel.app"
            target="blank"
            className=" mix-blend-difference"
          >
            AMS{" "}
          </a>
          <p className="text-white text-lg text-center  font-light -mb-10 opacity-0  ease-in-out duration-75">
            Marine company catalog
          </p>
        </h1>
      </div>
    </div>
  );
}
