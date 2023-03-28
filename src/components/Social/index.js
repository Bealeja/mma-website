import React from "react";
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
      <h2>Social</h2>
      <p>This is the JSON data: {fight}</p>
      <Ads />
    </div>
  );
}
