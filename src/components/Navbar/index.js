import React, { useRef } from "react";
import Logo from "../../assets/Logo.png";
import "./index.scss";
import Signup from "../Signup";
import { useState } from "react";

export default function Navbar({ Aboutus, Main }) {
  //Scroll Trigger
  const AboutUsScroll = () => {
    Aboutus();
  };

  const MainScroll = () => {
    Main();
  };

  //Form Trigger
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <div className="navbar">
      {showForm && <Signup onClose={handleClose} />}
      {/* <!--NAV BAR--> */}
      <div className="container">
        <div className="navbar">
          <div className="navbar-brand">
            {/* <!--Logo--> */}
            <a className="navbar-item">
              <img src={Logo} width="50" height="50" />
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
              <a className="navbar-item" href="#marketing">
                {" "}
                Marketing{" "}
              </a>
              <a className="navbar-item tac"> T&C </a>
              <a className="navbar-item tac">Join Us!</a>
            </div>
            <div className="navbar-end">
              <button className="button">Login</button>
              <button className="button" onClick={handleClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
