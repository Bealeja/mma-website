import React from "react";
import Logo from "../../assets/Logo.png";
import "./index.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      {/* <!--NAV BAR--> */}
      <div class="container">
        <div class="navbar">
          <div class="navbar-brand">
            {/* <!--Logo--> */}
            <a class="navbar-item">
              <img src={Logo} width="50" height="50" />
            </a>
            {/* <!--Nav Links--> */}
            <div class="navbar-start">
              <a class="navbar-item" href="#home">
                {" "}
                Home{" "}
              </a>
              <a class="navbar-item" href="#aboutus">
                {" "}
                About Us{" "}
              </a>
              <a class="navbar-item" href="#marketing">
                {" "}
                Marketing{" "}
              </a>
              <a class="navbar-item tac" onclick="tacFunction()">
                {" "}
                T&C{" "}
              </a>
              <a class="navbar-item tac" onclick="formFunction()">
                Join Us!
              </a>
            </div>
            <div class="navbar-end">
              <a class="button">Login</a>
              <a class="button">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
