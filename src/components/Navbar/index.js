import React from "react";
import Logo from "../../assets/Logo.png";
import "./index.scss";
import Signup from "../Signup";
import { useState } from "react";

export default function Navbar() {
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
              <a className="navbar-item" href="#home">
                {" "}
                Home{" "}
              </a>
              <a className="navbar-item" href="#aboutus">
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
              <a className="button">Login</a>
              <a className="button" onClick={handleClick}>
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
