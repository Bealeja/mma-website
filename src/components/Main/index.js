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
  // Define an array of fight objects with their respective links and image sources
  const fights = [
    { link: fight286Link, src: fight286 },
    { link: fight287Link, src: fight287 },
    { link: fight288Link, src: fight288 },
  ];

  return (
    <div ref={ref} className="main">
      <div className="landingpage">
        {/* <!--Hero Image--> */}
        <img alt="hero-image" src={Hero} width="100%" />

        {/* <!-- Local Fights (images)--> */}
        <div className="section-main">
          {/* Use map method to dynamically render fight images and links */}
          {fights.map((fight, index) => (
            <a href={fight.link} className="medialink" key={index}>
              <img alt="fight" className="mediaimage" src={fight.src} />
            </a>
          ))}
        </div>

        {/* <!--Advertising Banner--> */}
        <div className="section">
          <div className="banner">
            <a href={xmartialLink} alt="25%offxmartialusecode:Takedown">
              {[
                { value: "2", i: 1 },
                { value: "5", i: 2 },
                { value: "%", i: 3 },
                { value: " ", i: 4 },
                { value: "o", i: 5 },
                { value: "f", i: 6 },
                { value: "f", i: 7 },
                { value: " ", i: 8 },
                { value: "x", i: 9 },
                { value: "m", i: 10 },
                { value: "a", i: 11 },
                { value: "r", i: 12 },
                { value: "t", i: 13 },
                { value: "i", i: 14 },
                { value: "a", i: 15 },
                { value: "l", i: 16 },
                { value: " ", i: 17 },
                { value: "u", i: 18 },
                { value: "s", i: 19 },
                { value: "e", i: 20 },
                { value: " ", i: 21 },
                { value: "c", i: 22 },
                { value: "o", i: 23 },
                { value: "d", i: 24 },
                { value: "e", i: 25 },
                { value: ":", i: 26 },
                { value: " ", i: 27 },
                { value: "T", i: 28 },
                { value: "a", i: 29 },
                { value: "k", i: 30 },
                { value: "e", i: 31 },
                { value: "d", i: 32 },
                { value: "o", i: 33 },
                { value: "w", i: 34 },
                { value: "n", i: 35 },
              ].map((item) => (
                <span key={item.i} style={{ "--i": item.i }}>
                  {item.value}
                </span>
              ))}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Main);
