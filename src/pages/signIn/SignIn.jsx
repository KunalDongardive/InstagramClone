import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import "./signIn.css";
import { UserContext } from "../../components/userContext/UserContext";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const SignIn = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setCredentials((prevCredentials) => ({
  //     ...prevCredentials,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUserName = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (storedUserName === username && storedPassword === password) {
      setUser(true);
      navigate("/home");
    } else {
      navigate("/signUp");
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { username, password } = credentials;
  //   const storedUserName = localStorage.getItem("username");
  //   const storedPassword = localStorage.getItem("password");
  //   if (storedUserName === username && storedPassword === password) {
  //     navigate("/");
  //     setUser(true);
  //   } else {
  //     navigate("/signUp");
  //   }
  // };

  return (
    <div className="signIn">
      <div className="card">
        <div className="top">
          <h1>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</h1>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
          <button type="submit" onClick={handleSubmit}>
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
