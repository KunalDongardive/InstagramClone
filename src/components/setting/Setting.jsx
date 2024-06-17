import React from "react";
import "./setting.css"

const Setting = () => {
  return (
    <div className="setting">
      <div className="left-sidebar">
        <div className="sidebar-item">
          <i className="fa fa-user" />
          Edit Profile
        </div>
        <div className="sidebar-item">
          <i className="fa fa-bell" />
          Notifications
        </div>
        <div className="sidebar-item">
          <i className="fa fa-eye" />
          What you see
        </div>
        <div className="sidebar-item">
          <i className="fa fa-volume-mute" />
          Muted accounts
        </div>
        <div className="sidebar-item">
          <i className="fa fa-heart" />
          Like and share counts
        </div>
        <div className="sidebar-item">
          <i className="fa fa-user" />
          Who can see your content
        </div>
        <div className="sidebar-item">
          <i className="fa fa-lock" />
          Account privacy
        </div>
        <div className="sidebar-item">
          <i className="fa fa-star" />
          Close friends
        </div>
        <div className="sidebar-item">
          <i className="fa fa-ban" />
          Blocked
        </div>
        <div className="sidebar-item">
          <i className="fa fa-video-camera" />
          Hide story and live
        </div>
        <div className="sidebar-item">
          <i className="fa fa-comment" />
          How others can interact with you
        </div>
        <div className="sidebar-item">
          <i className="fa fa-envelope" />
          Messages and story replies
        </div>
        <div className="sidebar-item">
          <i className="fa fa-at" />
          Tags and mentions
        </div>
        <div className="sidebar-item">
          <i className="fa fa-commenting" />
          Comments
        </div>
        <div className="sidebar-item">
          <i className="fa fa-retweet" />
          Sharing and remixes
        </div>
        <div className="sidebar-item">
          <i className="fa fa-ban" />
          Restricted accounts
        </div>
        <div className="sidebar-item">
          <i className="fa fa-font" />
          Hidden words
        </div>
        <div className="sidebar-item">
          <i className="fa fa-mobile" />
          Your app and media
        </div>
        <div className="sidebar-item">
          <i className="fa fa-download" />
          Archiving and downloading
        </div>
      </div>
      <div className="right-content">
        <div className="profile-header">
          <h2>Edit Profile</h2>
        </div>
        <div className="profile-section">
          <div className="profile-image">
            <img
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&d=mm&r=g"
              alt="Profile Picture"
            />
          </div>
          <div className="profile-details">
            <h3>kunal_d_3</h3>
            <p>Kunal</p>
            <button className="change-photo">Change photo</button>
          </div>
        </div>
        <div className="profile-section">
          <h4>Website</h4>
          <input type="text" placeholder="Website" className="profile-input" />
          <p className="profile-info">
            Editing your links is only available on mobile. Visit the Instagram
            app and edit your profile to change the websites in your bio.
          </p>
        </div>
        <div className="profile-section">
          <h4>Bio</h4>
          <textarea
            placeholder="The Buddha's teachings are simple but profound, and they offer us a path to happiness and peace."
            className="profile-textarea"
          />
          <div className="char-count">108 / 150</div>
        </div>
        <div className="profile-section">
          <h4>Gender</h4>
          <select className="profile-select">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <p className="profile-info">
            This won't be part of your public profile.
          </p>
        </div>
        <div className="profile-section">
          <h4>Show account suggestions on profiles</h4>
          <label className="profile-switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <p className="profile-info">
            Choose whether people can see similar account suggestions on your
            profile, and whether your account can be suggested on other
            profiles.
          </p>
        </div>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
};

export default Setting;
