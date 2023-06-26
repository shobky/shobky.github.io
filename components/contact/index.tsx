"use client";
import Image from "next/image";
import React, { useState } from "react";
import mario1 from "@/public/mario1.png";
import mario2 from "@/public/mario2.png";
import cube from "@/public/cube.webp";

const jumpAudio = new Audio("/jump.mp3");
const powerUPAudio = new Audio("/powerup.wav");

export default function Contact() {
  const [jumping, setJumping] = useState(false);
  const [midJump, setMidJump] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    if (counter < 2) {
      setCounter(counter + 1);
      jumpAudio.play();
    } else {
      setCounter(counter + 1);
      powerUPAudio.play();
    }
    setJumping(true);
    setTimeout(() => {
      setMidJump(true);
    }, 10);
    setTimeout(() => {
      setJumping(false);
      setMidJump(false);
    }, 400);
  };

  return (
    <div
      className={ `  w-[90%] min-w-[90%] aspect-square contact-container relative `}
    >
      <div className="absolute  bottom-[9.5%] flex flex-col  items-center gap-[3.6vh] w-full ">
        <div>
          {counter >= 1 && (
            <p className=" text-md md:text-[calc(.7vw+.7vh)] rotate-90 link-animation-1 absolute w-fit ">
              github.com/shobky
            </p>
          )}
          {counter >= 2 && (
            <p className=" text-md md:text-[calc(.7vw+.7vh)] rotate-90 link-animation-2 absolute w-fit ">
              {" "}
              twitter.com/_shobky
            </p>
          )}
          {counter >= 3 && (
            <p className=" text-md md:text-[calc(.7vw+.7vh)] rotate-90 link-animation-3 absolute w-fit ">
              {" "}
              linkedin.com/in/ahmed-shobky
            </p>
          )}
        </div>
        <Image
          id="cube"
          className={`w-1/5 ml-[15%]  ease-in-out duration-0
        ${midJump && " scale-105"}
        `}
          src={cube}
          alt="Mario"
          width="200"
          height="200"
        />
        <button
          disabled={jumping}
          onClick={handleClick}
          className="w-full flex justify-center"
        >
          <Image
            id="mario"
            className={`w-1/3 aspect-square
        ${jumping && " relative -top-9  "}
        `}
            src={jumping ? mario2 : mario1}
            alt="Mario"
            width="200"
            height="200"
          />
        </button>
      </div>
    </div>
  );
}
