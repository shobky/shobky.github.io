import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { RiInstagramFill, RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Navigation = ({ homeActive, resumeActive }) => {
  const [menu, setMenu] = useState(false);
  const showMenu = () => {
    if (menu === true) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };
  return (
    <div>
      <p
        style={
          menu === true
            ? { color: "blue", fontWeight: "bold" }
            : { color: "white" }
        }
        id="nav_link"
        onClick={showMenu}
        className="nav_link"
        to="/resume"
      >
        {menu === false ? (
          <RiMenu4Fill />
        ) : (
          <RiCloseFill style={{ color: "rgb(255, 0, 170)" }} />
        )}
      </p>
      {menu === true ? (
        <div className="nav_menu">
          <ol className="nav_item-container">
            <li>
              <Link style={homeActive} className={`nav_item`} to="/">
                /Portfolio
              </Link>
            </li>
            <li>
              <Link style={resumeActive} className="nav_item" to="/resume">
                /Resume
              </Link>
            </li>
          </ol>

          <div className="social_media_links">
            <ol className="social_media-list">
              <a
                target="blank"
                href="https://web.facebook.com/profile.php?id=100072379422333"
              >
                <li className="sohial_link">
                  <FaFacebook className="nav_icon FB" />
                </li>
              </a>
              <a href="https://www.linkedin.com/in/ahmed-shobky-a27173212/">
                <li className="sohial_link">
                  <FaLinkedin className="nav_icon LI" />
                </li>
              </a>
              <a href="https://github.com/shobky">
                <li className="sohial_link">
                  <FaGithub className="nav_icon GH" />
                </li>
              </a>
              <a
                target="blank"
                href="https://www.instagram.com/nonchalantshobky/"
              >
                <li className="sohial_link">
                  <RiInstagramFill className="nav_icon IG" />
                </li>
              </a>
              <a href="https://twitter.com/" target="blank">
                <li className="sohial_link">
                  <FaTwitter className="nav_icon TW" />
                </li>
              </a>
            </ol>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navigation;
