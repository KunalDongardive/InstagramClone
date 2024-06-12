import React, { useState } from "react";

const Massages = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Message:", message);
    setMessage("");
  };

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
          <img
            src="https://www.instagram.com/static/images/ico/direct_message_glyph_24.png/1F81002A.png"
            alt="Direct Message"
          />
          <img
            src="https://www.instagram.com/static/images/ico/reel_glyph_24.png/4969B348.png"
            alt="Reel"
          />
          <img
            src="https://www.instagram.com/static/images/ico/explore_glyph_24.png/E89C0179.png"
            alt="Explore"
          />
          <img
            src="https://www.instagram.com/static/images/ico/activity_glyph_24.png/E51311E5.png"
            alt="Activity"
          />
        </div>
      </div>

      <div className="main">
        <div className="sidebar">
          <div className="user">
            <img
              src="https://avatars.githubusercontent.com/u/77122273?v=4"
              alt="User Profile"
            />
            <span>kunal_d_3</span>
          </div>
          <div className="messages">
            <div className="message">
              <img
                src="https://www.instagram.com/static/images/ico/direct_message_glyph_24.png/1F81002A.png"
                alt="Direct Message"
              />
              <span>Messages</span>
            </div>
            <div className="message">
              <img
                src="https://www.instagram.com/static/images/ico/direct_message_glyph_24.png/1F81002A.png"
                alt="Direct Message"
              />
              <span>Gayatri Gothe</span>
              <span>Gayatri sent an attachment.</span>
              <span>2 h</span>
            </div>
            <div className="message">
              <img
                src="https://www.instagram.com/static/images/ico/direct_message_glyph_24.png/1F81002A.png"
                alt="Direct Message"
              />
              <span>Raj_2208</span>
              <span>Raj_sent an attachment.</span>
              <span>5 h</span>
            </div>
            <div className="message">
              <img
                src="https://www.instagram.com/static/images/ico/direct_message_glyph_24.png/1F81002A.png"
                alt="Direct Message"
              />
              <span>Gaurav_sonawane</span>
              <span>Gaurav_sonawane sent an attachment.</span>
              <span>14 h</span>
            </div>
            <div className="message">
              <img
                src="https://www.instagram.com/static/images/ico/direct_message_glyph_24.png/1F81002A.png"
                alt="Direct Message"
              />
              <span>sriniwas kumar</span>
              <span>sriniwas sent an attachment.</span>
              <span>14 h</span>
            </div>
            <div className="message">
              <img
                src="https://www.instagram.com/static/images/ico/direct_message_glyph_24.png/1F81002A.png"
                alt="Direct Message"
              />
              <span>Kuldeep Badgujar</span>
              <span>Liked a message.</span>
              <span>1 d</span>
            </div>
            <div className="message">
              <img
                src="https://www.instagram.com/static/images/ico/direct_message_glyph_24.png/1F81002A.png"
                alt="Direct Message"
              />
              <span>pradnya salunke</span>
              <span>pradnya sent an attachment.</span>
              <span>1 d</span>
            </div>
            <div className="message">
              <img
                src="https://www.instagram.com/static/images/ico/direct_message_glyph_24.png/1F81002A.png"
                alt="Direct Message"
              />
              <span>जय श्री महाकाल</span>
              <span>Active now</span>
            </div>
            <div className="message">
              <img
                src="https://www.instagram.com/static/images/ico/direct_message_glyph_24.png/1F81002A.png"
                alt="Direct Message"
              />
              <span>Aditya</span>
              <span>Reacted to your message.</span>
              <span>4 d</span>
            </div>
            <div className="message">
              <img
                src="https://www.instagram.com/static/images/ico/direct_message_glyph_24.png/1F81002A.png"
                alt="Direct Message"
              />
              <span>विशु पाथरवट</span>
              <span>विशु sent an attachment.</span>
              <span>1 w</span>
            </div>
          </div>
        </div>
        <div className="chat">
          <div className="chat-header">
            <img
              src="https://avatars.githubusercontent.com/u/77122273?v=4"
              alt="User Profile"
            />
            <span>Kuldeep Badgujar</span>
          </div>
          <div className="chat-body">
            {/* Chat messages will be displayed here */}
          </div>
          <form onSubmit={handleSubmit} className="chat-input">
            <input
              type="text"
              placeholder="Message..."
              value={message}
              onChange={handleChange}
            />
            <button type="submit">
              <img
                src="https://www.instagram.com/static/images/ico/send_glyph_24.png/71A044FA.png"
                alt="Send"
              />
            </button>
          </form>
        </div>
        <div className="right-sidebar">
          <div className="story">
            <img
              src="https://www.instagram.com/static/images/ico/reel_glyph_24.png/4969B348.png"
              alt="Reel"
            />
            <img
              src="https://media.istockphoto.com/photos/young-indian-student-smiling-with-books-picture-id1209781092?b=1&k=20&m=1209781092&s=612x612&w=0&h=V3T8u5m8H8J8O8l0tD5aJSDnL09y8mG5o_n70v0="
              alt="Story"
            />
            <span>Sonu</span>
            <span>Contact Us For Online Tuitions</span>
            <img
              src="https://www.instagram.com/static/images/ico/play_button_glyph_24.png/59240137.png"
              alt="Play Button"
            />
          </div>
          <div className="story">
            <img
              src="https://www.instagram.com/static/images/ico/reel_glyph_24.png/4969B348.png"
              alt="Reel"
            />
            <img
              src="https://media.istockphoto.com/photos/group-of-people-singing-at-a-concert-picture-id1190695265?b=1&k=20&m=1190695265&s=612x612&w=0&h=qP59Yc8K9B-3nKq63v78f3-sBfr_K36-8K-zU-Q="
              alt="Story"
            />
            <span>musicwale24</span>
            <span>Songs by Kuldeep Badgujar</span>
            <img
              src="https://www.instagram.com/static/images/ico/play_button_glyph_24.png/59240137.png"
              alt="Play Button"
            />
            <img
              src="https://www.instagram.com/static/images/ico/heart_glyph_24.png/669B3E67.png"
              alt="Heart"
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <img
          src="https://www.instagram.com/static/images/ico/home_glyph_24.png/53B77E14.png"
          alt="Home"
        />
        <img
          src="https://www.instagram.com/static/images/ico/search_glyph_24.png/A7198B3D.png"
          alt="Search"
        />
        <img
          src="https://www.instagram.com/static/images/ico/direct_message_glyph_24.png/1F81002A.png"
          alt="Direct Message"
        />
        <img
          src="https://www.instagram.com/static/images/ico/reel_glyph_24.png/4969B348.png"
          alt="Reel"
        />
        <img
          src="https://www.instagram.com/static/images/ico/profile_glyph_24.png/65F7804F.png"
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Massages;
