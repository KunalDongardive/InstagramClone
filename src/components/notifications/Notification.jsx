import React from "react";
import "./notification.css";

const Notification = () => {
  return (
    <div className="notification">
      <h2 style={{ padding: "0px 15px" }}>Notification</h2>
      <div className="thisWeek" style={{ padding: "0px 15px" }}>
        <div className="thisHead">
          <h4>This week</h4>
        </div>
        <div className="week">
          <div className="proPic">
            <img src="./images/logo.png" alt="" />
            <div className="info">
              <div className="userName">username</div>
              <div className="message" style={{ fontSize: "15px" }}>
                started following you
              </div>
            </div>
          </div>

          <button>Follow</button>
        </div>
      </div>
      <div className="line"></div>
      <div className="thisMonth" style={{ padding: "0px 15px" }}>
        <div className="thisHead">
          <h4>This month</h4>
        </div>
        <div className="month">
          <div className="proPic">
            <img src="./images/logo.png" alt="" />
            <div className="info">
              <div className="userName">username</div>
              <div className="message">liked your post</div>
            </div>
          </div>

          <img src="./images/logo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Notification;
