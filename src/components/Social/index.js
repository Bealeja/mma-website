import React from "react";
import "./index.scss";
import { useState, useEffect } from "react";
import Ads from "./Ads";

export default function Social() {
  // Example API

  function thisFight(fightName) {
    console.log(fightName);
  }

  const URL =
    "https://api.sportsdata.io/v3/mma/scores/json/Schedule/UFC/2023?key=c216610bca064937a735acd659e17dc6";

  const [fight, setFight] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      result.json().then((json) => {
        console.log(json);
        thisFight(json[16].ShortName);
      });
    };
    fetchData();
  }, []);

  return (
    <div className="social">
      <h2>Exposure</h2>
      <div class="section">
        <div class="statistic">
          <h2>Facebook</h2>
          <h3>numbers</h3>
        </div>
        <div class="statistic">
          <h2>Instagram</h2>
          <h3>numbers</h3>
        </div>
        <div class="statistic">
          <h2>Snapchat</h2>
          <h3>numbers</h3>
        </div>
        <div class="statistic">
          <h2>Tiktok</h2>
          <h3>numbers</h3>
        </div>
      </div>
      <p>This is the JSON data: {fight}</p>
      <Ads />
    </div>
  );
}
