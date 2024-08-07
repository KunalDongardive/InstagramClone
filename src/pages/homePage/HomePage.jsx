import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faClapperboard,
  faBookmark,
  faBars,
  faEllipsis,
  faShare,
  faComment,
  faGear,
  faChartLine,
  faCircleExclamation,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCompass,
  faHeart,
  faSquarePlus,
  faCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookMessenger,
  faThreads,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./homePage.css";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenuBar2, setShowMenuBar2] = useState(false);
  const navigate = useNavigate();
  // eslint-disable-next-line
  // const [logout, setLogout] = useState(false);

  const handleMenuItemClick = (menuItem) => {
    if (
      menuItem === "search" ||
      menuItem === "massages" ||
      menuItem === "notification"
    ) {
      setShowMenuBar2(true);
    } else {
      setShowMenuBar2(false);
    }
  };

  const dropBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="home">
      <div className="page">
        <div className="menuBar">
          <div className="logo">
            <h1>WELCOME, </h1>
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
              to="/massages"
              className="menuItem"
              onClick={() => handleMenuItemClick("massages")}
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
        {showMenuBar2 && (
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
                to="/massages"
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
        )}

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
            <div className="drop-item" onClick={() => navigate("/signUp")}>
              Switch accounts
            </div>
            <div className="line2"></div>
            <div className="drop-item" onClick={() => navigate("/signUp")}>
              Log out
            </div>
          </div>
        )}

        <div className="container">
          <Outlet />
          <div className="post">
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
                      accusamus quasi adipisci voluptates amet quisquam nulla
                      sed!
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
              <div className="suggestLeft">
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
                  <div className="userid">kunal_d_3</div>
                  <div className="name">KunalDongardive</div>
                </div>
              </div>
              <div className="right">
                <div className="sBtn">Switch</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
