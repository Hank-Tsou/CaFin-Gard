import React from "react";

function CreateHistory(props) {

  return (
    <div className="historyList">
      <div className="historyId">{props.id+1}</div>
      <div className="historyName">{props.coffeeName}</div>
      <div className="historySize">{props.cupSize}</div>
      <div className="historyNumber">{props.cupNumber}</div>
      <div className="historyAmount">{props.coffineAmount}mg</div>
      <div className="historyTime">{props.drinkTime}</div>
    </div>
  );
}

export default CreateHistory;
