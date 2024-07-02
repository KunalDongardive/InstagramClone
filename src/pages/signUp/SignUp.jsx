import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import "./signUp.css";
import { UserContext } from "../../components/contextprovider/UserContext";
import { useState, useContext } from "react";
import Footer from "../../components/footer/Footer";

const SignUp = () => {
  const [userData, setuserData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const { signup } = useContext(UserContext); // Corrected context usage
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(userData);
    navigate("/signIn");
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Mobile Number or Email"
              value={userData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={userData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={userData.username}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Sign up</button>
          </form>

          <p style={{ color: "#8e8e8e" }}>
            By signing up, you agree to our <span>Terms</span>{" "}
            <span>Privacy Policy</span> and <span>Cookies Policy.</span>
          </p>
        </div>
      </div>
      <div className="option">
        <p>
          Have an account?{" "}
          <span
            onClick={() => {
              navigate("/signIn");
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
      <Footer />
    </div>
  );
};

export default SignUp;
