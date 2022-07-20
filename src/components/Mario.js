import "../styles/mario.css";
import "../styles/sochialLinks.css";
import mario1 from "../Assets/mario1.png";
import mario2 from "../Assets/mario2.png";
import infoCube from "../Assets/infoCube.png";
import jumpSound from "../Sounds/mario1.mp3";
import powerUp from "../Sounds/power-up.wav";
import { useState } from "react";
import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiGithubFill,
} from "react-icons/ri";
import WelcomWords from "./WelcomeWords";
import ShuffleText from "react-shuffle-text";

const Mario = ({ textArray }) => {
  const [counter, setCounter] = useState(0);

  const wrapperFunction = () => {
    handleMarioAnimation();
    handleSound();
    handleInfoCubeAnimation();
    handleSochialLinks();
  };

  const handleMarioAnimation = () => {
    const marioShown = document.getElementById("marioShown");
    marioShown.src = mario2;
    marioShown.style.bottom = "100px";

    const resetMario = () => {
      marioShown.src = mario1;
      marioShown.style.bottom = "0";
    };

    setTimeout(() => {
      resetMario();
    }, 300);
  };

  const handleSound = () => {
    const audio = new Audio(jumpSound);
    const audio2 = new Audio(powerUp);

    if (counter === 0 || counter === 1) {
      audio.play();
      setCounter(counter + 1);
    } else {
      audio2.play();
      setCounter(counter + 1);
    }
  };

  const handleSochialLinks = () => {
    if (counter === 0) {
      const facebook = document.getElementById("facebook");
      facebook.style.opacity = "100%";
      facebook.classList.add("fb-animation");
    } else if (counter === 1) {
      const instagram = document.getElementById("instagram");
      instagram.style.opacity = "100%";
      instagram.classList.add("fb-animation");
    } else if (counter === 2) {
      const github = document.getElementById("github");
      github.style.opacity = "100%";
      github.classList.add("fb-animation");
    } else {
    }
  };

  const handleInfoCubeAnimation = () => {
    const infoCube = document.getElementById("infoCube");
    if (window.innerWidth < 299) {
      infoCube.style.top = "-83px";
    } else {
      infoCube.style.top = "-194px";
    }
    infoCube.style.opacity = "95%";

    infoCube.style.width = "62px";

    const resetInfoCube = () => {
      if (window.innerWidth < 299) {
        infoCube.style.top = "-82px";
      } else {
        infoCube.style.top = "-193px";
      }
      infoCube.style.opacity = "100%";
      infoCube.style.width = "60px";
    };

    setTimeout(() => {
      resetInfoCube();
    }, 300);
  };

  return (
    <div className="mario_container">
      <div className="flex-left">
        <ShuffleText content="Ahmed Shobky" />

        <div className="title">
          <WelcomWords textArray={textArray} />
        </div>
      </div>
      <div className="flex-right">
        <div className="game_container">
          <a
            target="blank"
            href="https://web.facebook.com/profile.php?id=100072379422333"
          >
            <RiFacebookCircleFill
              id="facebook"
              className="social_media_link facebook"
            />
          </a>
          <a target="blank" href="https://www.instagram.com/nonchalantshobky/">
            <RiInstagramLine
              id="instagram"
              className="social_media_link instagram"
            />
          </a>
          <a href="https://github.com/shobky" target="blank">
            <RiGithubFill id="github" className="social_media_link github" />
          </a>
          <img
            className="infoCube"
            id="infoCube"
            alt="infoCube"
            src={infoCube}
          />
          <img
            id="marioShown"
            onClick={wrapperFunction}
            className="mario"
            alt="picture of mario"
            src={mario1}
          />
        </div>
  
      </div>
    </div>
  );
};

export default Mario;
