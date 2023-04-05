import React, { forwardRef } from "react";
import "./index.scss";
import Facebook from "../../assets/Facebook-logo.png";
import Instagram from "../../assets/instagram.png";
import Snapchat from "../../assets/snapchat.png";
import Tiktok from "../../assets/tiktok.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import view from "../../assets/people.png";

function Social(props, ref) {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(true)}
    >
      <div ref={ref} className="social">
        <h1>Exposure</h1>
        <div className="section-social">
          <div className="statistic">
            <h2>
              Facebook <img alt="facebook" src={Facebook} height="20" />
            </h2>
            <h3>
              <img
                alt="followers"
                src={view}
                className="followers"
                height="20"
              />
              {counterOn && (
                <CountUp start={0} end={256809} duration={5} delay={0} />
              )}
            </h3>
          </div>
          <div className="statistic">
            <h2>
              Instagram <img alt="Instagram" src={Instagram} height="20" />
            </h2>
            <h3>
              <img
                alt="followers"
                src={view}
                className="followers"
                height="20"
              />
              {counterOn && (
                <CountUp start={0} end={1802006} duration={5} delay={0} />
              )}
            </h3>
          </div>
          <div className="statistic">
            <h2>
              Snapchat <img alt="Snapchat" src={Snapchat} height="20" />
            </h2>
            <h3>
              <img
                alt="followers"
                src={view}
                className="followers"
                height="20"
              />
              {counterOn && (
                <CountUp start={0} end={123001} duration={5} delay={0} />
              )}
            </h3>
          </div>
          <div className="statistic">
            <h2 id="tiktok">
              Tiktok <img alt="Tiktok" src={Tiktok} height="20" />
            </h2>
            <h3>
              <img
                alt="followers"
                src={view}
                className="followers"
                height="20"
              />
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

export default forwardRef(Social);
