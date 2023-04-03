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
import Slider from "../Slider";

import image1 from "../../assets/ufc_fight_1.png";
import image2 from "../../assets/ufc_fight_2.png";
import image3 from "../../assets/ufc_fight_3.png";

export default function Footer() {
  const images = [image1, image2, image3];

  return (
    <footer
      style={{ backgroundColor: "black", color: "white", padding: "20px" }}
    >
      <Slider images={images} />
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
