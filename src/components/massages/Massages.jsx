import React from "react";
// import { useState } from "react";
import "./massages.css";

const Massages = () => {
  //   const [message, setMessage] = useState("");

  //   const handleChange = (event) => {
  //     setMessage(event.target.value);
  //   };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // Handle form submission here
  //     console.log("Message:", message);
  //     setMessage("");
  //   };

  return (
    <div className="massages">
      <div className="header">
        <div className="left">
          <img
            src="https://www.instagram.com/static/images/ico/instagram_logo.png/1AB6D787.png"
            alt="Instagram Logo"
          />
        </div>
        <div className="middle">
          <input type="text" placeholder="Search" />
        </div>
        <div className="right">
          <img src="" alt="Direct Message" />
          <img src="" alt="Reel" />
          <img src="" alt="Explore" />
          <img src="" alt="Activity" />
        </div>
      </div>

      <div className="main">
        <div className="sidebar">
          <div className="user">
            <img src="" alt="User Profile" />
            <span>kunal_d_3</span>
          </div>
          <div className="messages">
            <div className="message">
              <img src="" alt="Direct Message" />
              <span>Messages</span>
            </div>
            <div className="message">
              <img src="" alt="Direct Message" />
              <span>Gayatri Gothe</span>
              <span>Gayatri sent an attachment.</span>
              <span>2 h</span>
            </div>
            <div className="message">
              <img src="" alt="Direct Message" />
              <span>Raj_2208</span>
              <span>Raj_sent an attachment.</span>
              <span>5 h</span>
            </div>
            <div className="message">
              <img src="" alt="Direct Message" />
              <span>Gaurav_sonawane</span>
              <span>Gaurav_sonawane sent an attachment.</span>
              <span>14 h</span>
            </div>
            <div className="message">
              <img src="" alt="Direct Message" />
              <span>sriniwas kumar</span>
              <span>sriniwas sent an attachment.</span>
              <span>14 h</span>
            </div>
            <div className="message">
              <img src="" alt="Direct Message" />
              <span>Kuldeep Badgujar</span>
              <span>Liked a message.</span>
              <span>1 d</span>
            </div>
            <div className="message">
              <img src="" alt="Direct Message" />
              <span>pradnya salunke</span>
              <span>pradnya sent an attachment.</span>
              <span>1 d</span>
            </div>
            <div className="message">
              <img src="" alt="Direct Message" />
              <span>जय श्री महाकाल</span>
              <span>Active now</span>
            </div>
            <div className="message">
              <img src="" alt="Direct Message" />
              <span>Aditya</span>
              <span>Reacted to your message.</span>
              <span>4 d</span>
            </div>
            <div className="message">
              <img src="" alt="Direct Message" />
              <span>विशु पाथरवट</span>
              <span>विशु sent an attachment.</span>
              <span>1 w</span>
            </div>
          </div>
        </div>
        <div className="chat">
          <div className="chat-header">
            <img src="" alt="User Profile" />
            <span>Kuldeep Badgujar</span>
          </div>
          <div className="chat-body">
            {/* Chat messages will be displayed here */}
          </div>
          <form
            //    onSubmit={handleSubmit}
            className="chat-input"
          >
            <input
              type="text"
              placeholder="Message..."
              //   value={message}
              //   onChange={handleChange}
            />
            <button type="submit">
              <img src="" alt="Send" />
            </button>
          </form>
        </div>
        <div className="right-sidebar">
          <div className="story">
            <img src="" alt="Reel" />
            <img src="" alt="Story" />
            <span>Sonu</span>
            <span>Contact Us For Online Tuitions</span>
            <img src="" alt="Play Button" />
          </div>
          <div className="story">
            <img src="" alt="Reel" />
            <img src="" alt="Story" />
            <span>musicwale24</span>
            <span>Songs by Kuldeep Badgujar</span>
            <img src="" alt="Play Button" />
            <img src="" alt="Heart" />
          </div>
        </div>
      </div>
      <div className="footer">
        <img src="" alt="Home" />
        <img src="" alt="Search" />
        <img src="" alt="Direct Message" />
        <img src="" alt="Reel" />
        <img src="" alt="Profile" />
      </div>
    </div>
  );
};

export default Massages;
