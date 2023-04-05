import React, { useState } from "react";
import "./index.scss";
import Logo from "../../assets/Logo.png";

export default function Login({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if (email.trim() === "") {
      setEmailError("This email is invalid, please try again");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.trim() === "") {
      setPasswordError("*Your password is not correct, please try again.");
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
          <img arlt="logo" src={Logo} width="50" height="50" />
          <h2>Good To See You Back!</h2>
        </span>
        <h3>Enter Your Login Details</h3>
        <form onSubmit={handleSubmit}>
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
            Login
          </button>
          <button className="formbutton" onClick={handleClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}
