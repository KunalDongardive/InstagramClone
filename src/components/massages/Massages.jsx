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
            <img src="./images/logo.png" alt="User Profile" />
            <span>User Name</span>
          </div>
          <div className="chatBody">
            {/* Chat messages will be displayed here */}
          </div>
          <form
            //    onSubmit={handleSubmit}
            className="chatInput"
          >
            <input
              type="text"
              placeholder="Message..."
              //   value={message}
              //   onChange={handleChange}
            />
            <button type="submit">
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Massages;
