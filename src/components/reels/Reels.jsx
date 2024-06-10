import React from "react";
import "./reels.css";

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
      <div className="likes">
        <span className="icon">❤️</span>
        <span>Likes</span>
      </div>
      <div className="comments">
        <span className="icon">💬</span>
        <span>8,200</span>
      </div>
      <div className="share">
        <span className="icon">✈️</span>
      </div>
      <div className="save">
        <span className="icon">📑</span>
      </div>
      <div className="more">
        <span className="icon">...</span>
      </div>
    </div>
  );
};

export default Reels;
