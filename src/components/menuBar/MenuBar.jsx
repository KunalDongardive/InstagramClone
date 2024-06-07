import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faThreads } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./menuBar.css";

const MenuBar = () => {
  return (
    <div className="menuBar">
      <div className="logo">
        <h1>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</h1>
      </div>
      <div className="menu">
        <div className="menuItem">
          <FontAwesomeIcon icon={faHouse} /> <p>Home</p>
        </div>
        <div className="menuItem">
          <FontAwesomeIcon icon={faMagnifyingGlass} /> <p>Search</p>
        </div>
        <div className="menuItem">
          <FontAwesomeIcon icon={faCompass} /> <p>Explore</p>
        </div>
        <div className="menuItem">
          <FontAwesomeIcon icon={faClapperboard} /> <p>Reels</p>
        </div>
        <div className="menuItem">
          <FontAwesomeIcon icon={faFacebookMessenger} /> <p>Messages</p>
        </div>
        <div className="menuItem">
          <FontAwesomeIcon icon={faHeart} /> <p>Notifications</p>
        </div>
        <div className="menuItem">
          <FontAwesomeIcon icon={faSquarePlus} /> <p>Create</p>
        </div>
        <div className="menuItem"></div>
      </div>
      <div className="menu-2">
        <div className="menuItem">
          <FontAwesomeIcon icon={faThreads} /> <p>Threads</p>
        </div>
        <div className="menuItem">
          <FontAwesomeIcon icon={faBars} /> <p>More</p>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
