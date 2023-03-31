import React, { useState } from "react";
import "./index.scss";

export default function SignUpForm({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    // You can perform your sign-up logic here with name, email, and password
    // After sign up, you can close the pop-up form by calling onClose()
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="text" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Password:
            <input
              type="text"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
          <br />
          <button type="submit">Sign Up</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
