import React from "react";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className="search">
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
          <div className="clear" style={{ fontSize: "15px", color: "blue" }}>
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
  );
};

export default Search;
