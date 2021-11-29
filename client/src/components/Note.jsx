import React from "react";

function Note(props) {

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.cupNumber} {props.cupSize}</h1>
      <h1>{props.coffeeName}</h1>
      <p>Total Caffeine: {props.coffineAmount}mg</p>

      <button onClick={handleClick}>X</button>

    </div>
  );
}

export default Note;
