import React, { forwardRef } from "react";
import "./index.scss";
import Hero from "../../assets/Takedown_Titans_Cropped_1.png";
import Fight1 from "../../assets/ufc_fight_1.png";
import Fight2 from "../../assets/ufc_fight_2.png";
import Fight3 from "../../assets/ufc_fight_3.png";

function Main(props, ref) {
  return (
    <div ref={ref} className="main">
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
            <span style={{ "--i": 4 }}>&nbsp;</span>
            <span style={{ "--i": 5 }}>o</span>
            <span style={{ "--i": 6 }}>f</span>
            <span style={{ "--i": 7 }}>f</span>
            <span style={{ "--i": 8 }}>&nbsp;</span>
            <span style={{ "--i": 9 }}>x</span>
            <span style={{ "--i": 10 }}>m</span>
            <span style={{ "--i": 11 }}>a</span>
            <span style={{ "--i": 12 }}>r</span>
            <span style={{ "--i": 13 }}>t</span>
            <span style={{ "--i": 14 }}>i</span>
            <span style={{ "--i": 15 }}>a</span>
            <span style={{ "--i": 16 }}>l</span>
            <span style={{ "--i": 17 }}>&nbsp;</span>
            <span style={{ "--i": 18 }}>u</span>
            <span style={{ "--i": 19 }}>s</span>
            <span style={{ "--i": 20 }}>e</span>
            <span style={{ "--i": 21 }}>&nbsp;</span>
            <span style={{ "--i": 22 }}>c</span>
            <span style={{ "--i": 23 }}>o</span>
            <span style={{ "--i": 24 }}>d</span>
            <span style={{ "--i": 25 }}>e</span>
            <span style={{ "--i": 26 }}>:</span>
            <span style={{ "--i": 27 }}>&nbsp;</span>
            <span style={{ "--i": 28 }}>T</span>
            <span style={{ "--i": 28 }}>a</span>
            <span style={{ "--i": 28 }}>k</span>
            <span style={{ "--i": 28 }}>e</span>
            <span style={{ "--i": 28 }}>d</span>
            <span style={{ "--i": 28 }}>o</span>
            <span style={{ "--i": 28 }}>w</span>
            <span style={{ "--i": 28 }}>n</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Main);
