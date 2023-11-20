import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="left">
        <div className="logo">
          <h1>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</h1>
        </div>
        <div className="menu">
          <div className="home">
            <FontAwesomeIcon icon={faHouse} /> Home
          </div>
          <div className="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
          </div>
          <div className="explore">
            <FontAwesomeIcon icon={faCompass} /> Explore
          </div>
          <div className="reels">
            <FontAwesomeIcon icon={faClapperboard} /> Reels
          </div>
          <div className="message">
            <FontAwesomeIcon icon={faFacebookMessenger} /> Messages
          </div>
          <div className="notification">
            <FontAwesomeIcon icon={faHeart} /> Notifications
          </div>
          <div className="create">
            <FontAwesomeIcon icon={faSquarePlus} /> Create
          </div>
          <div className="profile"></div>
        </div>
        <div className="more">
          <div className="Threads"></div>
          <div className="setting"></div>
        </div>
      </div>
      <div className="center"></div>
      <div className="right"></div>
    </div>
  );
};

export default HomePage;
