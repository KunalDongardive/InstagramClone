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
        <div className="videoContainer">
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
              <button className="followBtn">Follow</button>
            </div>
          </div>
          <div className="title">
            <p>
              Wait for end 🤔🤭... <span>more</span>
            </p>
            <span className="music">🎶 roflmodifans - Original audio</span>
          </div>
        </div>
      </div>
      <div className="options">
        <div className="option">
          <FontAwesomeIcon icon={faHeart} />
          <p>Likes</p>
        </div>
        <div className="option">
          <FontAwesomeIcon icon={faComment} />
          <p>100</p>
        </div>
        <div className="option" style={{ marginBottom: "15px" }}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </div>
        <div className="option" style={{ marginBottom: "10px" }}>
          <FontAwesomeIcon icon={faBookmark} />
        </div>
        <div className="option">
          <FontAwesomeIcon icon={faEllipsis} />
        </div>
      </div>
    </div>
  );
};

export default Reels;
