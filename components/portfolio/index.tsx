import touchfingers from "@/public/touchfingers.png";
import solymaneya from "@/public/solymaneya.png";
import spotin from "@/public/spotin.png";
import ams from "@/public/ams.png";
import honor from "@/public/honor.png";
import Cover from "./Cover";

export default function Portfolio() {
  return (
    <div className=" md:float-right flex flex-wrap mr-[5%] w-full md:w-[54%] 2xl:absolute 2xl:right-0 bg-black relative overflow-hidden    ">
      <div className="square-container relative square ease-in-out duration-75  w-1/2 aspect-square">
        <a
          href="https://touchfingers.vercel.app"
          target="blank"
          className=" mix-blend-difference"
        >
          {" "}
          <Cover
            src={touchfingers}
            styles="absolute object-cover w-full h-full square-img opacity-75 hover:opacity-0 duration-75"
          />
          <h1 className="text-white hover:bg-black flex flex-col justify-center items-center h-full text-[calc(1.5vw+1.5vh)] font-medium z-20 relative">
            Touchfingers{" "}
            <p className="text-white text-[12px] md:text-[16px] text-center  font-light -mb-10 opacity-0  ease-in-out duration-75">
              Typing speed test, Click to see demo on pc
            </p>
          </h1>
        </a>
      </div>
      <div className=" square-container relative ease-in-out duration-75 w-1/2 aspect-square">
        <a
          href="https://honor-two.vercel.app"
          target="blank"
          className=" mix-blend-difference"
        >
          <Cover
            src={honor}
            styles="absolute object-cover w-full h-full square-img opacity-75 hover:opacity-0 duration-75"
          />
          <h1 className="text-white hover:bg-black flex flex-col justify-center items-center h-full text-[calc(1.5vw+1.5vh)] font-medium z-20 relative">
            Honor{" "}
            <p className="text-white text-[12px] md:text-[16px] text-center  font-light -mb-10 opacity-0  ease-in-out duration-75">
              Corporate website, with interactive caroucel
            </p>
          </h1>
        </a>
      </div>
      <div className=" square-container relative ease-in-out duration-75  w-1/2 aspect-square">
        <a
          href="https://solymaneya.com"
          target="blank"
          className=" mix-blend-difference"
        >
          {" "}
          <Cover
            src={solymaneya}
            styles="absolute object-cover w-full h-full square-img opacity-75 hover:opacity-0 duration-75"
          />
          <h1 className="text-white hover:bg-black flex flex-col justify-center items-center h-full text-[calc(1.5vw+1.5vh)] font-medium z-20 relative">
            Solimania{" "}
            <p className="text-white text-[12px] md:text-[16px] text-center  font-light -mb-10 opacity-0  ease-in-out duration-75">
              Company catalog & i18n translation arabic & english.
            </p>
          </h1>
        </a>
      </div>

      <div className=" square-container relative ease-in-out duration-75 w-1/2 aspect-square">
        <a
          href="http://spotin.onrender.com/admin/dashboard"
          target="blank"
          className=" mix-blend-difference"
        >
          {" "}
          <Cover
            src={spotin}
            styles="absolute object-cover w-full h-full square-img opacity-75 hover:opacity-0 duration-75"
          />
          <h1 className="text-white hover:bg-black flex flex-col justify-center items-center h-full text-[calc(1.5vw+1.5vh)] font-medium z-20 relative">
            Spotin
            <p className="text-white text-[12px] md:text-[16px] text-center  font-light -mb-10 opacity-0  ease-in-out duration-75">
              Small full-stack POS with MERN, {`(onrender loads data slowly)`}
            </p>
          </h1>
        </a>
      </div>

     
      <div className=" square-container relative ease-in-out duration-75 w-1/2 aspect-square">
        <a
          href="https://alammar-marine.vercel.app"
          target="blank"
          className=" mix-blend-difference"
        >
          <Cover
            src={ams}
            styles="absolute object-cover w-full h-full square-img opacity-75 hover:opacity-0 duration-75"
          />
          <h1 className="text-white hover:bg-black flex flex-col justify-center items-center h-full text-[calc(1.5vw+1.5vh)] font-medium z-20 relative">
            AMS{" "}
            <p className="text-white text-[12px] md:text-[16px] text-center  font-light -mb-10 opacity-0  ease-in-out duration-75">
              Marine company catalog
            </p>
          </h1>
        </a>
      </div>
    </div>
  );
}
