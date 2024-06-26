import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import "./signIn.css";
import { UserContext } from "../../components/contextprovider/UserContext";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin, signup } = useContext(UserContext);
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signin({ email, password });
    Navigate("/home");
  };

  return (
    <div className="signIn">
      <div className="card">
        <div className="top">
          <h1>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</h1>
          <input
            type="text"
            placeholder="Phone number, username or email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button onClick={handleSubmit}>Log in</button>
        </div>
        <div className="center">
          <div className="line"></div> OR <div className="line"></div>
        </div>
        <div className="bottom" style={{ color: "#1f1e75" }}>
          <p className="fbtn">
            <FontAwesomeIcon
              icon={faSquareFacebook}
              style={{ fontSize: "20px" }}
            />
            &nbsp; Log in with Facebook
          </p>
          <p style={{ fontSize: "13px", marginBottom: "10px" }}>
            Forgot password
          </p>
        </div>
      </div>
      <div className="option">
        <p>
          Don't have an account?{" "}
          <span style={{ color: "#0095f6" }} onClick={signin}>Sign up</span>
        </p>
      </div>
      <div className="otherApps">
        <p>Get the app.</p>
        <div className="storeImg">
          <img
            src="./images/apple store.png"
            alt=""
            height={"40px"}
            width={"130px"}
          />
          <img
            src="./images/play store.png"
            alt=""
            height={"40px"}
            width={"130px"}
          />
        </div>
      </div>
      <div className="footer">
        <ul>
          <li>Meta</li>
          <li>About</li>
          <li>Blog</li>
          <li>Jobs</li>
          <li>Help</li>
          <li>API</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Location</li>
          <li>Instagram Lite</li>
          <li>Threads</li>
          <li>contact</li>
          <li>Uploading & Non-Users</li>
          <li>Meta Verified</li>
        </ul>
        <p>© 2023 Instagram from Meta</p>
      </div>
    </div>
  );
};

export default SignIn;
