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
          <a href="#">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#ff0000" }}
              size="2x"
            />
            Facebook
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faSnapchatGhost}
              style={{ color: "#ff0000" }}
              size="2x"
            />
            Snapchat
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#ff0000" }}
              size="2x"
            />
            Instagram
          </a>
          <a href="#">
            <FontAwesomeIcon
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
