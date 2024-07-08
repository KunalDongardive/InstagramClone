import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserContext } from "../../components/userContext/UserContext";
import { useContext } from "react";
// import { useState } from "react";
import "./signUp.css";
import Footer from "../../components/footer/Footer";

const SignUp = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const emailRef = useRef();
  const userNameRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && emailRef.current === document.activeElement) {
        handleStart();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleStart = () => {
    localStorage.setItem("email", emailRef.current.value);
    localStorage.setItem("password", passwordRef.current.value);
    localStorage.setItem("name", nameRef.current.value);
    localStorage.setItem("userName", userNameRef.current.value);
  };

  const handleFinish = (e) => {
    e.preventDefault();
    localStorage.setItem("email", emailRef.current.value);
    localStorage.setItem("password", passwordRef.current.value);
    localStorage.setItem("name", nameRef.current.value);
    localStorage.setItem("userName", userNameRef.current.value);
    setUser(true);
    navigate("/signIn");
  };

  // const navigate = useNavigate();
  // const { setUser } = useContext(UserContext);

  // const emailRef = useRef();
  // const userName = useRef();
  // const name = useRef();
  // const passwordRef = useRef();

  // useEffect(() => {
  //   document.addEventListener("keydown", (e) => {
  //     if (e.key === "Enter" && emailRef.current === document.activeElement) {
  //       handleStart();
  //     }
  //   });
  // }, []);

  // const handleStart = () => {
  //   localStorage.setItem("email", emailRef.current.value);
  //   localStorage.setItem("password", passwordRef.current.value);
  //   localStorage.setItem("name", nameRef.current.value);
  //   localStorage.setItem("userName", userNameRef.current.value);
  // };

  // const handleFinish = (e) => {
  //   e.preventDefault();
  //   setPassword(passwordRef.current.value);
  //   localStorage.setItem("password", passwordRef.current.value);
  //   navigate("/signIn");
  //   setUser(true);
  // };

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
            <input type="text" name="email" ref={emailRef} />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              ref={nameRef}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              ref={userNameRef}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              ref={passwordRef}
            />
            <button type="submit" onClick={handleFinish}>
              Sign up
            </button>
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
