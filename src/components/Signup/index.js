import React, { useState } from "react";
import "./index.scss";
import Logo from "../../assets/Logo.png";

export default function SignUpForm({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if (name.trim() === "") {
      setNameError("*Please enter your name");
      isValid = false;
    } else {
      setNameError("");
    }

    if (email.trim() === "") {
      setEmailError("*Please enter your email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.trim() === "") {
      setPasswordError("*Please enter a valid password");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      // You can perform your sign-up logic here with name, email, and password
      // After sign up, you can close the pop-up form by calling onClose()
      onClose();
    }
  };

  const handleClose = () => {
    onClose(false);
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <span className="formheading">
          <img src={Logo} width="50" height="50" />
          <h2>Join The Family!</h2>
        </span>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
            {nameError && <div className="error">{nameError}</div>}
          </label>
          <br />
          <label>
            Email:
            <input type="text" value={email} onChange={handleEmailChange} />
            {emailError && <div className="error">{emailError}</div>}
          </label>
          <br />
          <label>
            Password:
            <input
              type="text"
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && <div className="error">{passwordError}</div>}
          </label>
          <br />
          <button className="formbutton" type="submit">
            Sign Up
          </button>
          <button className="formbutton" onClick={handleClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}
