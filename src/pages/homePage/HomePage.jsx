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
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./homePage.css";
import { useState } from "react";
import Search from "../../components/search/Search";
import Massages from "../../components/massages/Massages";
import Notification from "../../components/notifications/Notification";
import { Link } from "react-router-dom";
import Post from "../../components/post/Post";

const HomePage = () => {
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isNotificationClicked, setIsNotificationClicked] = useState(false);
  const [isMessagesClicked, setIsMessagesClicked] = useState(false);

  return (
    <div className="home">
      <div className="page">
        {isSearchClicked ? (
          <Search />
        ) : isMessagesClicked ? (
          <Massages />
        ) : isNotificationClicked ? (
          (<Notification />)(
            <div className="menuBar">
              <div className="logo">
                <h1>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</h1>
              </div>
              <div className="menu">
                <Link to="/post" className="menuItem">
                  <FontAwesomeIcon icon={faHouse} /> <p>Home</p>
                </Link>
                <Link
                  to="/search"
                  className="menuItem"
                  onClick={() => {
                    setIsSearchClicked(true);
                    setIsMessagesClicked(false);
                    setIsNotificationClicked(false);
                  }}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} /> <p>Search</p>
                </Link>
                <Link to="/feed" className="menuItem">
                  <FontAwesomeIcon icon={faCompass} /> <p>Explore</p>
                </Link>
                <Link to="/reels" className="menuItem">
                  <FontAwesomeIcon icon={faClapperboard} /> <p>Reels</p>
                </Link>
                <Link
                  to="/massages"
                  className="menuItem"
                  onClick={() => {
                    setIsSearchClicked(false);
                    setIsMessagesClicked(true);
                    setIsNotificationClicked(false);
                  }}
                >
                  <FontAwesomeIcon icon={faFacebookMessenger} /> <p>Messages</p>
                </Link>
                <Link
                  to="/notification"
                  className="menuItem"
                  onClick={() => {
                    setIsSearchClicked(false);
                    setIsMessagesClicked(false);
                    setIsNotificationClicked(true);
                  }}
                >
                  <FontAwesomeIcon icon={faHeart} /> <p>Notifications</p>
                </Link>
                <Link to="/create" className="menuItem">
                  <FontAwesomeIcon icon={faSquarePlus} /> <p>Create</p>
                </Link>
                <Link to="/profile" className="menuItem">
                  <img
                    src="./images/own.jpg"
                    alt=""
                    style={{
                      height: "20px",
                      width: "18px",
                      objectFit: "contain",
                      borderRadius: "50%",
                    }}
                  />
                  <p>Profile</p>
                </Link>
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
          )
        ) : (
          <div className="menuBar2">
            <div className="logo" style={{ fontSize: "30px" }}>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="menu">
              <Link to="/Post" className="menuItem">
                <FontAwesomeIcon icon={faHouse} />
              </Link>
              <Link to="/Search" className="menuItem">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Link>
              <Link to="/Feed" className="menuItem">
                <FontAwesomeIcon icon={faCompass} />
              </Link>
              <Link to="/Reels" className="menuItem">
                <FontAwesomeIcon icon={faClapperboard} />
              </Link>
              <Link to="/massages" className="menuItem">
                <FontAwesomeIcon icon={faFacebookMessenger} />
              </Link>
              <Link to="/notification" className="menuItem">
                <FontAwesomeIcon icon={faHeart} />
              </Link>
              <Link to="/create" className="menuItem">
                <FontAwesomeIcon icon={faSquarePlus} />
              </Link>
              <Link to="/profile" className="menuItem">
                <img
                  src="./images/own.jpg"
                  alt=""
                  style={{
                    height: "25px",
                    width: "25px",
                    objectFit: "contain",
                    borderRadius: "50%",
                  }}
                />
              </Link>
            </div>
            <div className="menu-2">
              <div className="menuItem">
                <FontAwesomeIcon icon={faThreads} />
              </div>
              <div className="menuItem">
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
          </div>
        )}

        <div className="search" style={{ display: "none" }}>
          <div className="sInput">
            <label>Search</label>
            <div className="search-bar">
              <input type="text" placeholder="Search" />
              <FontAwesomeIcon icon={faCircleXmark} />
            </div>
          </div>
          <div className="line"></div>
          <div className="recents">
            <div className="recentsTop">
              <div className="recent" style={{ fontWeight: "550" }}>
                Recent
              </div>
              <div
                className="clear"
                style={{ fontSize: "15px", color: "blue" }}
              >
                Clear All
              </div>
            </div>
            <div className="recentSearch">
              <div className="rsLeft">
                <img
                  src="./images/own.jpg"
                  alt=""
                  height={"50px"}
                  width={"50px"}
                  style={{ objectFit: "cover", borderRadius: "50%" }}
                />
                <div className="userName">
                  <div className="origin">
                    <div className="ame">kunal_d_3</div>
                    <div className="origin">Kunal Dongardive</div>
                  </div>
                </div>
              </div>
              <div className="rsRight">
                <FontAwesomeIcon icon={faXmark} />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Post />
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default HomePage;
