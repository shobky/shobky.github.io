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
}

export const projects: Project[] = [
  {
    title: "Touchfingers",
    link: "https://touchfingers.vercel.app",
    cover: touchfingersImg,
    discription: "Typing speed test",
  },
  {
    title: "Honor",
    link: "https://honor.vercel.app",
    cover: honorImg,
    discription: "Corporate website, with interactive caroucel",
  },
  {
    title: "Solymaneya",
    link: "https://solymaneya.com",
    cover: solymaneyaImg,
    discription: "Company catalog & i18n translation arabic & english.",
  },
  {
    title: "Spotin",
    link: "https://spotin.onrender.com/admin/dashboard",
    cover: spotinImg,
    discription: "Small full-stack POS with MERN, (onrender loads data slowly)",
  },
  {
    title: "AMS",
    link: "https://alammar-marine.com",
    cover: amsImg,
    discription: "Marine company catalog",
  },
];
