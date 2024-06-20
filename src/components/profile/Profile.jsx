import React from "react";
import "./profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profileContainer">
        <div className="profileHeader">
          <div className="proLeft">
            <img src="./images/download.png" alt="" />
          </div>
          <div className="proRight">
            <div className="proSetting">
              <div className="userName">kunal_d_3</div>
              <div className="editProfile">Edit Profile</div>
              <div className="editProfile">View archive</div>
              <div className="setting">
                <FontAwesomeIcon icon={faGear} />
              </div>
            </div>
            <div className="profileInfo">
              <div className="followers">
                <h4>26</h4> posts
              </div>
              <div className="followers">
                <h4>361</h4> followers
              </div>
              <div className="followers">
                <h4>270</h4> following
              </div>
            </div>
            <div className="about">
              <div className="name">Kᵘⁿᵃˡ</div>
              <div
                className="bio"
                style={{ marginTop: "-12px", textOverflow: "ellipsis" }}
              >
                <p>
                  The Buddha's teachings are simple but profound, and they offer
                  <br />
                  us a path to happiness and peace.
                </p>
                <p style={{ marginTop: "-10px" }}>XXIV•V•MMII</p>
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="postGrid">
          <div className="post1">
            <img src="" alt="" />
          </div>
          <div className="post1">
            <img src="" alt="" />
          </div>
          <div className="post1">
            <img src="" alt="" />
          </div>
          <div className="post2">
            <img src="" alt="" />
          </div>
          <div className="post2">
            <img src="" alt="" />
          </div>
          <div className="post2">
            <img src="" alt="" />
          </div>
          <div className="post3">
            <img src="" alt="" />
          </div>
          <div className="post3">
            <img src="" alt="" />
          </div>
          <div className="post3">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
