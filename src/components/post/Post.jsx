import React from "react";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import "./post.css";

const Post = () => {
  return (
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
                adipisicing elit. Expedita inventore quaerat magnam accusamus
                quasi adipisci voluptates amet quisquam nulla sed!
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
  );
};

export default Post;
