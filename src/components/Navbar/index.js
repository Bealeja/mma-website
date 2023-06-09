import React from "react";
import Logo from "../../assets/Logo.png";
import "./index.scss";
import SignUp from "../Signup";
import { useState } from "react";
import Login from "../Login";

export default function Navbar({ Aboutus, Main, Social }) {
  //Scroll Trigger
  const AboutUsScroll = () => {
    Aboutus();
  };

  const MainScroll = () => {
    Main();
  };

  const SocialScroll = () => {
    Social();
  };

  //Form Trigger
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleShowLoginForm = () => {
    setShowLoginForm(true);
    setShowSignupForm(false);
  };

  const handleCloseLoginForm = () => {
    setShowLoginForm(false);
  };

  const handleShowSignupForm = () => {
    setShowSignupForm(true);
    setShowLoginForm(false);
  };

  const handleCloseSignupForm = () => {
    setShowSignupForm(false);
  };

  return (
    <div className="navbar">
      {showSignupForm && <SignUp onClose={handleCloseSignupForm} />}
      {showLoginForm && <Login onClose={handleCloseLoginForm} />}
      {/* <!--NAV BAR--> */}
      <div className="container">
        <div className="navbar">
          <div className="navbar-brand">
            {/* <!--Logo--> */}
            <a className="navbar-item">
              <img alt="logo" src={Logo} width="50" height="50" />
            </a>
            {/* <!--Nav Links--> */}
            <div className="navbar-start">
              <a onClick={MainScroll} className="navbar-item" href="#home">
                {" "}
                Home{" "}
              </a>
              <a
                onClick={AboutUsScroll}
                className="navbar-item"
                href="#aboutus"
              >
                {" "}
                About Us{" "}
              </a>
              <a
                onClick={SocialScroll}
                className="navbar-item"
                href="#marketing"
              >
                {" "}
                Marketing{" "}
              </a>
            </div>
            <div className="navbar-end">
              <button className="button" onClick={handleShowLoginForm}>
                Log In
              </button>
              <button className="button" onClick={handleShowSignupForm}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
