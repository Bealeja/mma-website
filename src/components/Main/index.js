import React, { forwardRef } from "react";
import "./index.scss";
import Hero from "../../assets/Takedown_Titans_Cropped_1.png";
import fight286 from "../../assets/ufc_286.png";
import fight287 from "../../assets/ufc_287.png";
import fight288 from "../../assets/ufc_288.png";

const fight286Link = "https://www.ufc.com/event/ufc-286";
const fight287Link = "https://www.ufc.com/event/ufc-287";
const fight288Link = "https://www.ufc.com/event/ufc-288";

const xmartialLink = "https://www.xmartial.com/";

function Main(props, ref) {
  return (
    <div ref={ref} className="main">
      <div className="landingpage">
        {/* <!--Hero Image--> */}
        <img src={Hero} width="100%" />

        {/* <!-- Local Fights (images)--> */}
        <div className="section-main">
          <a href={fight286Link} className="medialink">
            <img className="mediaimage" src={fight286} />
          </a>

          <a href={fight287Link} className="medialink">
            <img className="mediaimage" src={fight287} />
          </a>

          <a href={fight288Link} className="medialink">
            <img className="mediaimage" src={fight288} />
          </a>
        </div>

        {/* <!--Advertising Banner--> */}
        <div className="section">
          <div className="banner">
            <a href={xmartialLink}>
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Main);
