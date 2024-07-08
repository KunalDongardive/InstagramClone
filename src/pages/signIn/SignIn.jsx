import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import "./signIn.css";
import { UserContext } from "../../components/contextprovider/UserContext";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const SignIn = () => {
  const { signin } = useContext(UserContext); // Corrected context usage
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });
  // const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signin(userData);
    navigate("/home");
  };

  // const { signin } = useContext(UserContext); // Corrected context usage
  // const navigate = useNavigate();
  // const [userData, setuserData] = useState({ email: "", password: "" });
  // const [error, setError] = useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setuserData({ ...userData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   signin(userData);
  //   navigate("/home");
  // };

  return (
    <div className="signIn">
      <div className="card">
        <div className="top" onSubmit={handleSubmit}>
          <h1>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</h1>
          <input
            type="text"
            name="email"
            placeholder="Phone number, username or email"
            value={userData.email}
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
          <button type="submit" onClick={() => navigate("/home")}>
            Log in
          </button>
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
          <p
            style={{
              fontSize: "13px",
              marginBottom: "10px",
              cursor: "pointer",
            }}
          >
            Forgot password
          </p>
        </div>
      </div>
      {/* {error && <p>{error}</p>} */}
      <div className="option">
        <p>
          Don't have an account?{" "}
          <span
            style={{ color: "#0095f6" }}
            onClick={() => navigate("/signUp")}
          >
            Sign up
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

export default SignIn;
