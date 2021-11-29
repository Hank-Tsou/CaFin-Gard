import React, { useState } from "react";

function Time(props) {

  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="timeContainer">
      <h1>{time}</h1>
    </div>
  );
}

export default Time;
