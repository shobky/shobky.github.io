"use client";

export default function Portfolio() {
  return (
    <div className=" portfolio-wrapper  md:float-right flex flex-wrap mr-[5%] w-full md:w-[54%] 2xl:absolute 2xl:right-0    bg-black relative overflow-hidden    ">
      <div className=" square ease-in-out duration-75 bg-amber-600  w-1/2 aspect-square">
        <h1 className="text-white flex justify-center items-center h-full text-[calc(1.5vw+1.5vh)] font-medium">
          <a
            className="w-full h-full flex justify-center items-center"
            href="https://touchfingers.vercel.app"
            target="blank"
          >
            Touchfingers{" "}
          </a>
        </h1>
      </div>
      <div className=" square ease-in-out duration-75 bg-cyan-600  w-1/2 aspect-square">
        <h1 className="text-white flex justify-center items-center h-full text-[calc(1.5vw+1.5vh)] font-medium">
          <a
            className="w-full h-full flex justify-center items-center"
            href="https://solymaneya.com"
            target="blank"
          >
            Solimania{" "}
          </a>
        </h1>
      </div>
      <div className=" square ease-in-out duration-75 bg-black  w-1/2 aspect-square">
        <h1 className="text-white flex justify-center items-center h-full text-[calc(1.5vw+1.5vh)] font-medium">
          <a
            className="w-full h-full flex justify-center items-center"
            href="https://honor-two.vercel.app"
            target="blank"
          >
            Honor{" "}
          </a>
        </h1>
      </div>

      <div className=" square ease-in-out duration-75 bg-orange-400   w-1/2 aspect-square">
        <h1 className="text-white flex justify-center items-center h-full text-[calc(1.5vw+1.5vh)] font-medium">
          <a
            className="w-full h-full flex justify-center items-center"
            href="http://spotin.onrender.com/admin/dashboard"
            target="blank"
          >
            Spotin
          </a>
        </h1>
      </div>
      <div className=" square ease-in-out duration-75 bg-sky-500  w-1/2 aspect-square">
        <h1 className="text-white flex justify-center items-center h-full text-[calc(1.5vw+1.5vh)] font-medium">
          <a
            className="w-full h-full flex justify-center items-center"
            href="https://alammar-marine.vercel.app"
            target="blank"
          >
            AMS{" "}
          </a>
        </h1>
      </div>
    </div>
  );
}
