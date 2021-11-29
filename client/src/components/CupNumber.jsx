import React, { useState } from "react";

function CupNumber() {
  
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="cupCounter">
      <button onClick={decrease}>-</button>
      <div className="cupNumber"></div>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default CupNumber;
