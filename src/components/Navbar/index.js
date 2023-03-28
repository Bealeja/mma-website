import React from "react";
import Logo from "../../assets/Logo.png";
import "./index.scss";

export default function Navbar() {
  return (
    <div className="navbar">
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
              <a className="button">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
