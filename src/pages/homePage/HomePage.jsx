import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faClapperboard,
  faGear,
  faChartLine,
  faBookmark,
  faSun,
  faCircleExclamation,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCompass,
  faHeart,
  faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookMessenger,
  faThreads,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link, Outlet } from "react-router-dom";
import "./homePage.css";
import Search from "../../components/search/Search";
import Massages from "../../components/massages/Massages";
import Notification from "../../components/notifications/Notification";
import { UserContext } from "../../components/contextprovider/UserContext";

const HomePage = () => {
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isMessagesClicked, setIsMessagesClicked] = useState(false);
  const [isNotificationClicked, setIsNotificationClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user, signout, signin } = useContext(UserContext);

  const dropBox = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    setIsSearchClicked(menuItem === "search");
    setIsMessagesClicked(menuItem === "messages");
    setIsNotificationClicked(menuItem === "notification");
  };

  return (
    <div className="home">
      <div className="page">
        {isSearchClicked || isMessagesClicked || isNotificationClicked ? (
          <div className="menuBar2">
            <div className="logo" style={{ fontSize: "30px" }}>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="menu">
              <Link to="/post" className="menuItem">
                <FontAwesomeIcon icon={faHouse} />
              </Link>
              <Link
                to="/search"
                className="menuItem"
                onClick={() => handleMenuItemClick("search")}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Link>
              <Link to="/feed" className="menuItem">
                <FontAwesomeIcon icon={faCompass} />
              </Link>
              <Link to="/reels" className="menuItem">
                <FontAwesomeIcon icon={faClapperboard} />
              </Link>
              <Link
                to="/messages"
                className="menuItem"
                onClick={() => handleMenuItemClick("messages")}
              >
                <FontAwesomeIcon icon={faFacebookMessenger} />
              </Link>
              <Link
                to="/notification"
                className="menuItem"
                onClick={() => handleMenuItemClick("notification")}
              >
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
                <FontAwesomeIcon icon={faThreads} /> <p>Threads</p>
              </div>
              <div className="menuItem" onClick={dropBox}>
                <FontAwesomeIcon icon={faBars} /> <p>More</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="menuBar">
            <div className="logo">
              <h1>WELCOME, {user.name}</h1>
            </div>
            <div className="menu">
              <Link to="/post" className="menuItem">
                <FontAwesomeIcon icon={faHouse} /> <p>Home</p>
              </Link>
              <Link
                to="/search"
                className="menuItem"
                onClick={() => handleMenuItemClick("search")}
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
                to="/messages"
                className="menuItem"
                onClick={() => handleMenuItemClick("messages")}
              >
                <FontAwesomeIcon icon={faFacebookMessenger} /> <p>Messages</p>
              </Link>
              <Link
                to="/notification"
                className="menuItem"
                onClick={() => handleMenuItemClick("notification")}
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
              <div className="menuItem" onClick={dropBox}>
                <FontAwesomeIcon icon={faBars} /> <p>More</p>
              </div>
            </div>
          </div>
        )}

        {isSearchClicked && <Search />}
        {isMessagesClicked && <Massages />}
        {isNotificationClicked && <Notification />}

        {isOpen && (
          <div className="dropBox">
            <div className="drop-item">
              <FontAwesomeIcon icon={faGear} /> Settings
            </div>
            <div className="drop-item">
              <FontAwesomeIcon icon={faChartLine} /> Your Activity
            </div>
            <div className="drop-item">
              <FontAwesomeIcon icon={faBookmark} /> Saved
            </div>
            <div className="drop-item">
              <FontAwesomeIcon icon={faSun} /> Switch appearance
            </div>
            <div className="drop-item">
              <FontAwesomeIcon icon={faCircleExclamation} />
              Report a problem
            </div>
            <div className="line"></div>
            <div className="drop-item" onClick={signin}>
              Switch accounts
            </div>
            <div className="line2"></div>
            <div className="drop-item" onClick={signout}>
              Log out
            </div>
          </div>
        )}
        <div className="container">
          <Outlet />
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default HomePage;
