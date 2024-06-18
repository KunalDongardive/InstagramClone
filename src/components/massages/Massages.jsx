import React from "react";
// import { useState } from "react";
import "./massages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

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
      <div className="main">
        <div className="sidebar">
          <div className="userSearch">
            <div className="userId">
              kunal_d_3
              <span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ marginLeft: "5px" }}
                />
              </span>
            </div>
            <div className="userSrh">
              <FontAwesomeIcon icon={faPenToSquare} />
            </div>
          </div>
          <div className="massageInfo">
            <div className="massageHead">
              <div className="heading">Messages</div>
              <div className="requests" style={{ color: "grey" }}>
                Requests
              </div>
            </div>
            <div className="message">
              <img src="./images/logo.png" alt="Direct Message" />
              <span>Kunal Dongardive</span>
              <span>Kunal sent an attachment.</span>
              <span>2 h</span>
            </div>
            <div className="message">
              <img src="./images/logo.png" alt="Direct Message" />
              <span>Raj_2208</span>
              <span>Raj_sent an attachment.</span>
              <span>5 h</span>
            </div>
            <div className="message">
              <img src="./images/logo.png" alt="Direct Message" />
              <span>Gaurav_sonawane</span>
              <span>Gaurav_sonawane sent an attachment.</span>
              <span>14 h</span>
            </div>
            <div className="message">
              <img src="./images/logo.png" alt="Direct Message" />
              <span>sriniwas kumar</span>
              <span>sriniwas sent an attachment.</span>
              <span>14 h</span>
            </div>
            <div className="message">
              <img src="./images/logo.png" alt="Direct Message" />
              <span>Kuldeep Badgujar</span>
              <span>Liked a message.</span>
              <span>1 d</span>
            </div>
            <div className="message">
              <img src="./images/logo.png" alt="Direct Message" />
              <span>pradnya salunke</span>
              <span>pradnya sent an attachment.</span>
              <span>1 d</span>
            </div>
            <div className="message">
              <img src="./images/logo.png" alt="Direct Message" />
              <span>जय श्री महाकाल</span>
              <span>Active now</span>
            </div>
            <div className="message">
              <img src="./images/logo.png" alt="Direct Message" />
              <span>Aditya</span>
              <span>Reacted to your message.</span>
              <span>4 d</span>
            </div>
            <div className="message">
              <img src="./images/logo.png" alt="Direct Message" />
              <span>विशु पाथरवट</span>
              <span>विशु sent an attachment.</span>
              <span>1 w</span>
            </div>
          </div>
        </div>
        <div className="chat">
          <div className="chat-header">
            <img src="./images/logo.png" alt="User Profile" />
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
      </div>
    </div>
  );
};

export default Massages;
