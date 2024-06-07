import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faThreads } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="home">
      <div className="page">
        <div className="menuBar">
          <div className="logo">
            <h1>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</h1>
          </div>
          <div className="menu">
            <div className="menuItem">
              <FontAwesomeIcon icon={faHouse} /> <p>Home</p>
            </div>
            <div className="menuItem">
              <FontAwesomeIcon icon={faMagnifyingGlass} /> <p>Search</p>
            </div>
            <div className="menuItem">
              <FontAwesomeIcon icon={faCompass} /> <p>Explore</p>
            </div>
            <div className="menuItem">
              <FontAwesomeIcon icon={faClapperboard} /> <p>Reels</p>
            </div>
            <div className="menuItem">
              <FontAwesomeIcon icon={faFacebookMessenger} /> <p>Messages</p>
            </div>
            <div className="menuItem">
              <FontAwesomeIcon icon={faHeart} /> <p>Notifications</p>
            </div>
            <div className="menuItem">
              <FontAwesomeIcon icon={faSquarePlus} /> <p>Create</p>
            </div>
            <div className="menuItem"></div>
          </div>
          <div className="menu-2">
            <div className="menuItem">
              <FontAwesomeIcon icon={faThreads} /> <p>Threads</p>
            </div>
            <div className="menuItem">
              <FontAwesomeIcon icon={faBars} /> <p>More</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="stories-Posts">
            <div className="stories">
              <div className="profile">
                <img
                  src="./images/own.jpg"
                  alt=""
                  height={"50px"}
                  width={"50px"}
                  style={{ objectFit: "cover", borderRadius: "50%" }}
                />
                <div className="userName">kunal_d_3</div>
              </div>
            </div>
            <div className="posts">
              <div className="top">
                <div className="topLeft">
                  <div className="profile">
                    <img
                      src="./images/own.jpg"
                      alt=""
                      height={"50px"}
                      width={"50px"}
                      style={{ objectFit: "cover", borderRadius: "50%" }}
                    />
                  </div>
                  <div className="userName">
                    <div className="origin">
                      <div className="name">kunal_d_3</div>
                      <div className="origin">India</div>
                    </div>
                    <div className="dot">
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{ fontSize: "0.2rem" }}
                      />
                    </div>
                    <div className="time">5h</div>
                  </div>
                </div>
                <div className="right">
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </div>
              <div className="center">
                <img
                  src="./images/4756.jpg"
                  alt=""
                  height={"450px"}
                  width={"585px"}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="bottom">
                <div className="options">
                  <div className="optionsLeft">
                    <div className="like">
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div className="comments">
                      <FontAwesomeIcon icon={faComment} />
                    </div>
                    <div className="share">
                      <FontAwesomeIcon icon={faShare} />
                    </div>
                  </div>
                  <div className="right">
                    <FontAwesomeIcon icon={faBookmark} />
                  </div>
                </div>
                <div className="likes" style={{ padding: "0.2rem 0rem" }}>
                  358 likes
                </div>
                <div className="caption">
                  <div className="summary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt, commodi?Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Expedita inventore quaerat magnam
                    accusamus quasi adipisci voluptates amet quisquam nulla sed!
                  </div>
                  <div className="viewComment">View all comments</div>
                  <div className="addComment">
                    <textarea
                      name=""
                      id=""
                      cols="20"
                      rows="1"
                      placeholder="Add a comment"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="suggestions">
            <div className="suggLeft">
              <div className="profile">
                <img
                  src="./images/own.jpg"
                  alt=""
                  height={"50px"}
                  width={"50px"}
                  style={{ objectFit: "cover", borderRadius: "50%" }}
                />
              </div>
              <div className="userName">
                <div className="origin">
                  <div className="ame">kunal_d_3</div>
                  <div className="origin">Kunal Dongardive</div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="sBtn">Switch</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default HomePage;
