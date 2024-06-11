import React from "react";
import "./reels.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const Reels = () => {
  return (
    <div className="reels">
      <div className="reelContainer">
        <div className="video-container">
          <video className="video">
            <source
              src="https://www.instagram.com/reel/C6-WXJgvmEU/?utm_source=ig_web_copy_link"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="content">
          <div className="info">
            <div className="user">
              <img
                src="./images/own.jpg"
                alt="User profile"
                style={{
                  height: "50px",
                  width: "50px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
              <span>kunal</span>
              <button className="follow-button">Follow</button>
            </div>
          </div>
          <div className="title">
            <h2>Anokha Gadget 😄</h2>
            <h2>Alien life 👽</h2>
            <p>
              Wait for end 🤔🤭... <span>more</span>
            </p>
            <span className="music">🎶 roflmodifans - Original audio</span>
          </div>
        </div>
      </div>
      <div className="options">
        <div className="option">
          <span className="icon">
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <p>Likes</p>
        </div>
        <div className="option">
          <span className="icon">
            <FontAwesomeIcon icon={faComment} />
          </span>
          <p>100</p>
        </div>
        <div className="share">
          <span className="icon">
            <FontAwesomeIcon icon={faPaperPlane} />
          </span>
        </div>
        <div className="save">
          <span className="icon">
            <FontAwesomeIcon icon={faBookmark} />
          </span>
        </div>
        <div className="more">
          <span className="icon">
            <FontAwesomeIcon icon={faEllipsis} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Reels;
