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
      <div className="landingpage">
        <div>
          <img src={Hero} width="100%" />
        </div>
        {/* <!-- Local Fights (images)--> */}
        <div className="section">
          <img className="mediaimage" src={Fight1} />
          <img className="mediaimage" src={Fight2} />
          <img className="mediaimage" src={Fight3} />
        </div>
        {/* <!--Advertising Banner--> */}
        <div className="section">
          <div className="banner">
            <span style={{ "--i": 1 }}>2</span>
            <span style={{ "--i": 2 }}>5</span>
            <span style={{ "--i": 3 }}>%</span>
            <span style={{ "--i": 4 }}> </span>
            <span style={{ "--i": 5 }}>o</span>
            <span style={{ "--i": 6 }}>f</span>
            <span style={{ "--i": 7 }}>f</span>
            <span style={{ "--i": 8 }}> </span>
          </div>
        </div>
      </div>
      <About />
    </div>
  );
}
