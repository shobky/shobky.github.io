"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import mario1 from "@/public/mario1.png";
import mario2 from "@/public/mario2.png";
import cube from "@/public/cube.webp";
import { Links } from "./Links";

export default function Contact() {
  const [jumping, setJumping] = useState(false);
  const [midJump, setMidJump] = useState(false);
  const [counter, setCounter] = useState(0);

  const [jumpAudio, setJumpAudio] = useState<HTMLAudioElement | null>(null);
  const [powerUPAudio, setPowerUPAudio] = useState<HTMLAudioElement | null>(
    null
  );

  useEffect(() => {
    // Create the Audio objects only on the client-side
    setJumpAudio(new Audio("/jump.mp3"));
    setPowerUPAudio(new Audio("/powerup.wav"));
  }, []);

  const handleClick = () => {
    if (counter < 3) {
      setCounter(counter + 1);
      jumpAudio?.play();
    } else {
      setCounter(counter + 1);
      powerUPAudio?.play();
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
      className={`contact-container relative `}
    >
      <div className="absolute  bottom-[5%] flex flex-col  items-center gap-[3.6vh] w-full ">
        <Links counter={counter} />
        <Image
          onContextMenu={e => e.preventDefault()}
          id="cube"
          className={`w-1/5 ml-[15%]  ease-in-out duration-0
        ${midJump && "scale-105"}
        `}
          src={cube}
          alt="Mario"
          width="200"
          height="200"
        />
        <button
          disabled={jumping}
          onClick={handleClick}
          className="w-full flex justify-center select-none focus:n "
        >
          <Image
            onContextMenu={e => e.preventDefault()}
            id="mario"
            className={`w-1/3 aspect-square mb-[5%]
        ${jumping && " relative  -top-10  "}
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
