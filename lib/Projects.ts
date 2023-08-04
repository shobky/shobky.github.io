import touchfingersImg from "@/public/touchfingers.png";
import solymaneyaImg from "@/public/solymaneya.png";
import spotinImg from "@/public/spotin.png";
import amsImg from "@/public/ams.png";
import honorImg from "@/public/honor.png";
import { StaticImageData } from "next/image";

interface Project {
  title: string;
  link: string;
  cover: StaticImageData;
  discription: string;
  long?: string;
  repos?: string[];
}

export const projects: Project[] = [
  {
    title: "Touchfingers",
    link: "https://touchfingers.vercel.app",
    cover: touchfingersImg,
    discription: "Typing speed test",
    long: "This is a personal project I built that calculates WPM (Words per minute) which is how fast you can type an article in 60 seconds + how accuarte you type it which is a persantage.",
  },
  {
    title: "Honor",
    link: "https://honor-two.vercel.app",
    cover: honorImg,
    discription: "Corporate website, with interactive caroucel",
    long: "This a corparate website, designed the UI in figma and turned it into Next.js. Interactive caroucel build with swiperjs",
  },
  {
    title: "solymaneya",
    link: "https://solymaneya.com",
    cover: solymaneyaImg,
    discription: "Company catalog & i18n translation arabic & english.",
    long: "This is a frontend web app built with nextjs@13.4, supports multiple languages ( Arabic, English) using next-intl library. Company bio and products~services listing",
  },
  {
    title: "Spotin",
    link: "https://spotin-demo.vercel.app",
    repos: ["spotin.system", "spotin.space"],
    cover: spotinImg,
    discription: "Full stack POS built with FireBase",
    long: "This is a full stack POS built with Firebase and React, this is connected to a demo database cause the production project is being used by client with 200 users. Also tried building it with MERN stack and implemented most of the features in it with a new design. Onreder is really slow tho, so wait a bit.",
  },
  {
    title: "AMS",
    link: "https://alammar-marine.com",
    cover: amsImg,
    discription: "Marine company catalog",
  },
];
