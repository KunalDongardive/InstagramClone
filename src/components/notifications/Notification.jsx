import React from "react";
import "./notification.css";

const Notification = () => {
  return (
    <div className="notification">
      <h2>Notification</h2>
      <div className="thisWeek">
        <div className="thisHead">
          <h4>This week</h4>
        </div>
        <div className="week">
          <div className="proPic">
            <img src="./images/logo.png" alt="" />
          </div>
          <div className="info">
            <div className="userName">username</div>
            <div className="message">started following you</div>
          </div>
          <button>Follow</button>
        </div>
      </div>
      <div className="line"></div>
      <div className="thisMonth">
        <div className="thisHead">
          <h4>This month</h4>
        </div>
        <div className="month">
          <div className="proPic">
            <img src="./images/logo.png" alt="" />
          </div>
          <div className="info">
            <div className="userName">username</div>
            <div className="message">liked your post</div>
          </div>
          <img src="./images/logo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Notification;
