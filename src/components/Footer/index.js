import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSnapchatGhost,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "black", color: "white", padding: "20px" }}
    >
      <div className="container">
        <div className="social-icons">
          <a className="footer-logo" href="#">
            <FontAwesomeIcon
              className="footer-icon"
              icon={faFacebook}
              style={{ color: "#ff0000" }}
              size="2x"
            />
            Facebook
          </a>
          <a className="footer-logo" href="#">
            <FontAwesomeIcon
              className="footer-icon"
              icon={faSnapchatGhost}
              style={{ color: "#ff0000" }}
              size="2x"
            />
            Snapchat
          </a>
          <a className="footer-logo" href="#">
            <FontAwesomeIcon
              className="footer-icon"
              icon={faInstagram}
              style={{ color: "#ff0000" }}
              size="2x"
            />
            Instagram
          </a>
          <a className="footer-logo" href="#">
            <FontAwesomeIcon
              className="footer-icon"
              icon={faTiktok}
              style={{ color: "#ff0000" }}
              size="2x"
            />
            Tiktok
          </a>
        </div>
      </div>
    </footer>
  );
}
