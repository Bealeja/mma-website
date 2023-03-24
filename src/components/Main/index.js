import React from "react";
import About from "./About";
import "./index.scss";
import Hero from "../../assets/Takedown_Titans_Cropped_1.png";
import Fight1 from "../../assets/ufc_fight_1.png";
import Fight2 from "../../assets/ufc_fight_2.png";
import Fight3 from "../../assets/ufc_fight_3.png";

export default function Main() {
  return (
    <div className="main">
      {/* <!-- Landing Page Image/Video--> */}
      {/* landing page div class not used */}
      <div class="landingpage">
        <div>
          <img src={Hero} width="100%" />
        </div>
        {/* <!-- Local Fights (images)--> */}
        <div class="section">
          <img class="mediaimage" src={Fight1} />
          <img class="mediaimage" src={Fight2} />
          <img class="mediaimage" src={Fight3} />
        </div>
        {/* <!--Advertising Banner--> */}
        <div class="section">
          <div class="banner">
            <h2>Advertisement</h2>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
}
