import React, { useState } from "react";

function PickCoffee(props) {

  const [count, setCount] = useState({
    coffeeName: "",
    cupSize:"",
    cupNumber: 0,
    coffineAmount: 0
  });

  const [sizeStyle, setSizeStyle] = useState({
    sizeCoffeine:0,
    sizeSmallStyle:"",
    sizeMediumStyle:"",
    sizeLargeStyle:""
  });

  const [displayCupCounter, setDisplayCupCounter] = useState("hideCupCounter");


  var totalSelectionCoffine = 0;

  if(props.totalSelection.length !== 0){
    props.totalSelection.map((coffee)=>{
      totalSelectionCoffine = totalSelectionCoffine + coffee.coffineAmount;
      return 0;
    })
  }

  var currentRemainAfterSelected = props.remain-totalSelectionCoffine;

  function increase() {
    if(((currentRemainAfterSelected-count.coffineAmount) >= sizeStyle.sizeCoffeine)){
      setCount(prevValue => {
        return {
          ...prevValue,
          coffeeName: props.coffeeName,
          cupNumber: (count.cupNumber + 1),
          coffineAmount: (count.coffineAmount+sizeStyle.sizeCoffeine)
        };
      });
    }
  }

  function decrease() {
    if(count.cupNumber > 0){
      setCount(prevValue => {
        return {
          ...prevValue,
          cupNumber: (count.cupNumber - 1),
          coffineAmount: (count.coffineAmount-sizeStyle.sizeCoffeine)
        };
      });
    }else{
      setCount(prevValue => {
        return {
          ...prevValue,
          cupNumber: (0),
          coffineAmount: (0)
        };
      });
    }
  }

  function removePick(){
    props.setCardStyle("hidePickCoffeeContainer");
    setDisplayCupCounter("hideCupCounter");
    setSizeStyle({
      sizeCoffeine:0,
      sizeSmallStyle:"",
      sizeMediumStyle:"",
      sizeLargeStyle:""
    });
  }

  function submitNote(event) {
    if(count.cupNumber!==0){

      props.onAdd(count);

      setCount({
        coffeeName:"",
        cupSize:"",
        cupNumber: 0,
        coffineAmount: 0
      });

      props.setCardStyle("hidePickCoffeeContainer");
      setDisplayCupCounter("hideCupCounter");
      setSizeStyle({
        sizeCoffeine:0,
        sizeSmallStyle:"",
        sizeMediumStyle:"",
        sizeLargeStyle:""
      });
    }
  }

  function updateSize(event){

    if(event === 1){
      setSizeStyle({
        sizeCoffeine:props.caffeine,
        sizeSmallStyle:"selectSize",
        sizeMediumStyle:"",
        sizeLargeStyle:""
      });
      setCount(prevValue => {
        return {
          ...prevValue,
          cupSize: "Small"
        };
      });
    }
    else if(event === 2){
      setSizeStyle({
        sizeCoffeine:props.caffeine*2,
        sizeSmallStyle:"",
        sizeMediumStyle:"selectSize",
        sizeLargeStyle:""
      });
      setCount(prevValue => {
        return {
          ...prevValue,
          cupSize: "Medium"
        };
      });
    }
    else{
      setSizeStyle({
        sizeCoffeine:props.caffeine*3,
        sizeSmallStyle:"",
        sizeMediumStyle:"",
        sizeLargeStyle:"selectSize"
      });
      setCount(prevValue => {
        return {
          ...prevValue,
          cupSize: "Large"
        };
      });
    }

    setCount(prevValue => {
      return {
        ...prevValue,
        cupNumber: 0,
        coffineAmount: 0
      };
    });

    setDisplayCupCounter("showCupCounter");
  }


  return (
    <div className="pickCoffeeCard">
      <button onClick={removePick} className="unPick" >X</button>

      <h1>{props.coffeeName}</h1>
      <iframe src={props.youtube} title="coffeeYoutubeVideo"></iframe>
      <p>{props.description}</p>

      <div className="sizeContainer">

        <div className={`cupSizeSmall ${sizeStyle.sizeSmallStyle}`}>
          <img className="smallcup" name="small" onClick={() => updateSize(1)} src={process.env.PUBLIC_URL + '/img/small.png'}  alt="size_img" />
          <div>
            <img className="coffeeCup" src={process.env.PUBLIC_URL + '/img/coffeeCup.jpeg'}  alt="size_img" />
          </div>
        </div>

        <div className={`cupSizeMedium ${sizeStyle.sizeMediumStyle}`}>
          <img className="mediumcup" name="medium" onClick={() => updateSize(2)} src={process.env.PUBLIC_URL + '/img/medium.png'}  alt="size_img" />
          <div>
            <img className="coffeeCup" src={process.env.PUBLIC_URL + '/img/coffeeCup.jpeg'}  alt="size_img" />
            <img className="coffeeCup" src={process.env.PUBLIC_URL + '/img/coffeeCup.jpeg'}  alt="size_img" />
          </div>
        </div>

        <div className={`cupSizeLarge ${sizeStyle.sizeLargeStyle}`}>
          <img className="largecup" name="large" onClick={() => updateSize(3)} src={process.env.PUBLIC_URL + '/img/large.png'}  alt="size_img" />
          <div>
            <img className="coffeeCup" src={process.env.PUBLIC_URL + '/img/coffeeCup.jpeg'}  alt="size_img" />
            <img className="coffeeCup" src={process.env.PUBLIC_URL + '/img/coffeeCup.jpeg'}  alt="size_img" />
            <img className="coffeeCup" src={process.env.PUBLIC_URL + '/img/coffeeCup.jpeg'}  alt="size_img" />
          </div>
        </div>

      </div>


      <div className = {displayCupCounter}>
        <div className="cupCounter">
          <div className = "decreaseLimitCover" style={(count.cupNumber > 0)? {display: "none"}:{display: "block"}}></div>
          <button onClick={decrease}>-</button>
          <div className="cupNumber">{count.cupNumber}</div>
          <div className = "addLimitCover"
                style={((currentRemainAfterSelected-count.coffineAmount) >= sizeStyle.sizeCoffeine)?
                      {display: "none"}:{display: "block"}}></div>
          <button onClick={increase}>+</button>
        </div>

        <h3>Total: {count.coffineAmount} mg</h3>
        <button className="addButton" onClick={submitNote}>Add</button>
      </div>


    </div>
  );
}

export default PickCoffee;
