import React from "react";
import "./feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed-1">
        <div className="fLeft">
          <div className="post-1">
            <div className="posts"></div>
            <div className="posts"></div>
          </div>
          <div className="post-2">
            <div className="posts"></div>
            <div className="posts"></div>
          </div>
        </div>
        <div className="fRight">
          <div className="posts">
            <video src="https://www.instagram.com/reel/C7AsmVVyOhR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="></video>
          </div>
        </div>
      </div>
      <div className="feed-2">
        <div className="fLeft">
          <div className="posts">
            <video src="https://www.instagram.com/reel/C7AsmVVyOhR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="></video>
          </div>
        </div>
        <div className="fRight">
          <div className="post-1">
            <div className="posts"></div>
            <div className="posts"></div>
          </div>
          <div className="post-2">
            <div className="posts"></div>
            <div className="posts"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
