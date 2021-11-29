import React from "react";


function CreateArea(props) {

  function addPickCoffee(event){
    const pickInfo = {
      coffeeName: props.coffeeName,
      youtube: props.youtube,
      description: props.description,
      caffeine: props.caffeine,
      remain: props.remain,
    };

    props.addPickCoffee(pickInfo);

  }

  const remainCups = Math.floor(props.remain/props.caffeine);

  return (
    <div className = "coffeeSelection">

        <div className = "limitCover" style={(remainCups>0)? {display: "none"}:{display: "block"}}></div>
        <div className="cupRemainCircle">{remainCups}</div>
        <img  onClick={addPickCoffee} src={process.env.PUBLIC_URL + '/img/' +props.imgURL}  alt="coffee_img" />
        <h2>{props.coffeeName}</h2>
        <p>Caffeine: {props.caffeine}</p>

    </div>
  );
}

export default CreateArea;
