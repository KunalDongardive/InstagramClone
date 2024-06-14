import React from "react";
import "./notification.css";

const Notification = () => {
  return (
    <div className="notifications-container">
      <h2 className="notifications-title">Notifications</h2>

      <div className="notifications-section">
        <h3 className="section-title">New</h3>
        <div className="notification">
          <div className="notification-icon"></div>
          <div className="notification-content">
            You have 9 new followers on Threads. 1h
          </div>
        </div>
      </div>

      <div className="notifications-section">
        <h3 className="section-title">This week</h3>

        <div className="notification">
          <div className="notification-profile-pic">
            <img src="" alt="" />
          </div>
          <div className="notification-content">
            gayu_2303 started following you. 2d
          </div>
          <button className="follow-button">Follow</button>
        </div>

        <div className="notification">
          <div className="notification-profile-pic">
            <img src="" alt="Profile picture" />
          </div>
          <div className="notification-content">
            pratik054321, abhishek61648 and others liked your post. 3d
          </div>
          <div className="notification-image">
            <img src="" alt="Image" />
          </div>
        </div>

        <div className="notification">
          <div className="notification-profile-pic">
            <img src="" alt="Profile picture" />
          </div>
          <div className="notification-content">
            ziddi_queen_997_ posted a thread that you might like: "Zaroori nahi
            ki jeene ka koi Sahara ho, Zaroori nahi ki jiske ham ho woh bhi ...
            4d
          </div>
        </div>

        <div className="notification">
          <div className="notification-icon"></div>
          <div className="notification-content">
            You have 9 new followers on Threads. 3w
          </div>
        </div>

        <div className="notification">
          <div className="notification-profile-pic"></div>
          <div className="notification-content">
            mr_saurabhbhoi1238 started following you. 6d
          </div>
          <button className="follow-button">Follow</button>
        </div>
      </div>

      <div className="notifications-section">
        <h3 className="section-title">This month</h3>

        <div className="notification">
          <div className="notification-profile-pic">
            <img src="" alt="Profile picture" />
          </div>
          <div className="notification-content">
            parshya_i_00, aadarsh_shinde_77 and swarit_kurjekar_ liked your
            story. 1w
          </div>
          <div className="notification-image">
            <img src="" alt="Image" />
          </div>
        </div>

        <div className="notification">
          <div className="notification-profile-pic">
            <img src="" alt="Profile picture" />
          </div>
          <div className="notification-content">
            pratik054321 started following you. 1w
          </div>
          <button className="follow-button">Follow</button>
        </div>

        <div className="notification">
          <div className="notification-profile-pic">
            <img src="" alt="Profile picture" />
          </div>
          <div className="notification-content">
            bharat.devkar.2225, prashika_04 and gauravsonawane_77 liked your
            story. 1w
          </div>
          <div className="notification-image">
            <img src="" alt="Image" />
          </div>
        </div>

        <div className="notification">
          <div className="notification-profile-pic"></div>
          <div className="notification-content">
            abhishek61648, he_nitesh and liked your post 1w
          </div>
          <div className="notification-image">
            <img src="" alt="Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
