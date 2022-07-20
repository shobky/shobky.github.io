import { useState } from "react";
import WelcomWords from "../components/WelcomeWords";
import Mario from "../components/Mario";
import LinkedIn from "../components/LinkedIn";
import "../styles/home.css";
import Navigation from "../components/Navigation";

const Home = () => {
  const homeActive = {color:"lightblue", textDecoration:"underline"};
  const textArray = [
    "Hello",
    "اهلا",
    "Hola",
    "Bonjour",
    "Guten tag",
    "Nǐn hǎo",
    "Shalom aleichem",
    "Namastē",
    "Salve",
    "Anyoung haseyo",
    "Merhaba",
  ];

  const titles = ["React Developer", "UI/UX Designer", "Clink on mario <3"];

  return (
    <div className="App">
      <nav>
        <Navigation homeActive={homeActive} />
      </nav>
      <div className="welcome_section">
        <div className="welcome_words">
          <WelcomWords textArray={textArray} />
        </div>
      </div>
      <div
        className="mario_section"
        style={
          window.innerWidth < 601 ? { height: "780px" } : { height: "660px" }
        }
      >
        <Mario textArray={titles} />
      </div>
      <div className="Linkedin_section">
        <LinkedIn />
      </div>
      <div>
        hi
      </div>
    </div>
  );
};
export default Home;
