import React from "react";
import "./index.scss";
import Ads from "../Ads";
import Facebook from "../../assets/Facebook-logo.png";
import Instagram from "../../assets/instagram.png";
import Snapchat from "../../assets/snapchat.png";
import Tiktok from "../../assets/tiktok.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import ImageSlider from "../Ads";
import view from "../../assets/people.png";

export default function Social() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(true)}
    >
      <div className="social">
        <h1>Exposure</h1>
        <div className="section-social">
          <div className="statistic">
            <h2>
              Facebook <img src={Facebook} height="20" />
            </h2>
            <h3>
              <img src={view} className="followers" height="20" />
              {counterOn && (
                <CountUp start={0} end={256809} duration={5} delay={0} />
              )}
            </h3>
          </div>
          <div className="statistic">
            <h2>
              Instagram <img src={Instagram} height="20" />
            </h2>
            <h3>
              <img src={view} className="followers" height="20" />
              {counterOn && (
                <CountUp start={0} end={1802006} duration={5} delay={0} />
              )}
            </h3>
          </div>
          <div className="statistic">
            <h2>
              Snapchat <img src={Snapchat} height="20" />
            </h2>
            <h3>
              <img src={view} className="followers" height="20" />
              {counterOn && (
                <CountUp start={0} end={123001} duration={5} delay={0} />
              )}
            </h3>
          </div>
          <div className="statistic">
            <h2>
              Tiktok <img src={Tiktok} height="20" />
            </h2>
            <h3>
              <img src={view} className="followers" height="20" />
              {counterOn && (
                <CountUp start={0} end={800123} duration={5} delay={0} />
              )}
            </h3>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}
