import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import "./signUp.css";
import { UserContext } from "../../components/contextprovider/UserContext";
import { useState, useContext } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const { signup } = useContext(UserContext);
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // setPassword(passwordRef.current.value);
    // localStorage.setItem("password", passwordRef.current.value);
    signup({ email, password, name, username });
    Navigate("/signIn");
    // setUser(true);
  };

  return (
    <div className="signUp">
      <div className="page">
        <div className="header">
          <h1 className="logo">𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</h1>
          <p style={{ fontWeight: "bold", color: "#8e8e8e" }}>
            Sign up to see photos and videos <br /> from your friends.
          </p>
          <button>
            <FontAwesomeIcon
              icon={faSquareFacebook}
              style={{ fontSize: "20px" }}
            />
            &nbsp; Log in with Facebook
          </button>
          <div className="hline">
            <div className="line"></div> OR <div className="line"></div>
          </div>
        </div>
        <div className="container">
          <form>
            <input
              type="text"
              placeholder="Mobile Number or Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            ></input>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
          </form>

          <p style={{ color: "#8e8e8e" }}>
            By signing up, you agree to our <span>Terms</span>{" "}
            <span>Privacy Policy</span> and <span>Cookies Policy .</span>
          </p>
          <button onClick={handleSubmit}>Sign up</button>
        </div>
      </div>
      <div className="option">
        <p>
          Have an account?{" "}
          <span
            onClick={() => {
              Navigate("/signIn");
            }}
          >
            Log in
          </span>
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

export default SignUp;
