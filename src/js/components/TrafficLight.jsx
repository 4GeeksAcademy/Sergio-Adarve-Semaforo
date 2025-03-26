import React, { useState } from "react";
import "../../styles.css";

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  return (
    <div className="traffic-container">
      <div className="poste"></div>
      <div className="traffic-light">
        <div
          onClick={() => setColor("red")}
          className={`light red ${color === "red" ? "glow" : ""}`}
        ></div>
        <div
          onClick={() => setColor("yellow")}
          className={`light yellow ${color === "yellow" ? "glow" : ""}`}
        ></div>
        <div
          onClick={() => setColor("green")}
          className={`light green ${color === "green" ? "glow" : ""}`}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
