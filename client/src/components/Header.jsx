import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import Time from "./Time";
import CreateHistory from "./CreateHistory";
function Header(props) {

  const [historyData, setHistoryData] = useState([]);
  const [historyDisplay, setHistoryDisplay] = useState("initalHistory");
  const today = new Date();
  let navigate = useNavigate();

  const dateSchema = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };

  const todayDate = today.toLocaleDateString("en-US", dateSchema);

  function logout(){
    navigate('/');
    window.location.reload();
  }

  function showHistory(){
    axios.get("/coffee/"+props.userId)
    .then(function (response) {
      // console.log(response.data.history);
      if(response.data.history){
        setHistoryData(response.data.history);
      }
    })
    setHistoryDisplay("showHistory");
  }

  return (
    <header>
      <div className="totech">
        <img src={process.env.PUBLIC_URL + '/img/notice.png'}  alt="notice_img" />
        <p>Hank Tsou, a Software Engineer experience in Full Stack Web Development, System Design and Machine Learning <a href="https://infinite-scrubland-43946.herokuapp.com/">Learn More</a> about him!</p>
      </div>

      <div className={`historyContainer ${historyDisplay}`}>

        <div className="returnAndName">
          <img onClick={()=>{setHistoryDisplay("hideHistory")}} src={process.env.PUBLIC_URL + '/img/collapse.png'}  alt="notice_img" />
          <h1>Daily History</h1>
        </div>

        <div className="historyTitle">
          <div className="historyId">No.</div>
          <div className="historyName">Name</div>
          <div className="historySize">Size</div>
          <div className="historyNumber">#</div>
          <div className="historyAmount">Coffine</div>
          <div className="historyTime">Time</div>
        </div>

        {historyData.map((historyItem, index)=>{
          return (
            <CreateHistory
              key={index}
              id={index}
              coffeeName={historyItem.coffeeName}
              cupSize={historyItem.cupSize}
              cupNumber={historyItem.cupNumber}
              coffineAmount={historyItem.coffineAmount}
              drinkTime={historyItem.drinkTime}
            />
          );
        })}
      </div>

      <div className="topContainer">

        <h1>{todayDate}</h1>
        <div className="topButtonContainer">
          <button className="historyButton" onClick={showHistory}>History</button>
          <button className="logoutButton" onClick={logout}>Logout</button>
        </div>
      </div>

      <h1 className="appTitle">
        <img src={process.env.PUBLIC_URL + '/img/gard.jpeg'}  alt="notice_img" />
        CaFin Gard
      </h1>

      <div className = "DateRemainContainer">
        <h1 className="coffineRemain">Daily Remain: {props.remain} mg</h1>
        <Time />
      </div>


    </header>
  );
}

export default Header;
