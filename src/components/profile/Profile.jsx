import React from "react";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-pic">
          <img src="" alt="" />
        </div>
        <div className="profile-info">
          <h3>kunal_d_3</h3>
          <div className="profile-stats">
            <span>26 posts</span>
            <span>362 followers</span>
            <span>275 following</span>
          </div>
          <p>Kunal</p>
          <p>
            The Buddha's teachings are simple but profound, and they offer us a
            path to happiness and peace.
          </p>
          <p>XXIV.V MMII</p>
        </div>
        <div className="profile-actions">
          <button>Edit Profile</button>
          <button>View Archive</button>
          <span className="settings-icon">⚙️</span>
        </div>
      </div>
      <div className="profile-content">
        <div className="content-tabs">
          <button className="active">POSTS</button>
          <button>SAVED</button>
          <button>TAGGED</button>
        </div>
        <div className="post-grid">
          <div className="post-item">
            <img src="" alt="" />
          </div>
          <div className="post-item">
            <img src="" alt="" />
          </div>
          <div className="post-item">
            <img src="" alt="" />
          </div>
          <div className="post-item">
            <img src="" alt="" />
          </div>
          <div className="post-item">
            <img src="" alt="" />
          </div>
          <div className="post-item">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
