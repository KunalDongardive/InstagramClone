import React from "react";
// import { useState } from "react";
import "./massages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

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
            <div className="massage">
              <div className="proPic">
                <img
                  src="./images/logo.png"
                  alt="Direct Message"
                  style={{ height: "50px", width: "50px", borderRadius: "50%" }}
                />
              </div>
              <div className="userInfo">
                <div className="userName">User Name</div>
                <div className="info">User sent an attachment</div>
              </div>
            </div>
          </div>
        </div>
        <div className="chat">
          <div className="chatHeader">
            <div className="profile">
              <img src="./images/logo.png" alt="User Profile" />
              <span>User Name</span>
            </div>
            <div className="callOption">
              <div className="audio">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="video">
                <FontAwesomeIcon icon={faVideo} />
              </div>
              <div className="information">
                <FontAwesomeIcon icon={faExclamation} />
              </div>
            </div>
          </div>
          <div className="chatBody">
            {/* Chat messages will be displayed here */}
          </div>
          <div className="chatInput">
            <FontAwesomeIcon icon={faFaceSmile} />
            <input type="text" placeholder="Message..." />
            <FontAwesomeIcon icon={faMicrophone} />
            <FontAwesomeIcon icon={faImage} />
            <FontAwesomeIcon icon={faHeart} />
            {/* <button type="submit">Send</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Massages;
