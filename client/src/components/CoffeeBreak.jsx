import React, { useState } from "react";
import coffeeBrands from "../coffeeBrands";
import axios from 'axios';

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateStore from "./CreateStore";
import PickCoffee from "./PickCoffee";
// import Time from "./Time";
// import RemainInfo from "./RemainInfo";
import Decision from "./Decision";

function CoffeeBreak(props) {

  const [notes, setNotes] = useState([]);
  const [cardStyle, setCardStyle] = useState("hidePickCoffeeContainer");
  // const [cardStyle, setCardStyle] = useState("showPickCoffeeContainer");
  const [caffeineRemain, setCaffeineRemain] = useState(500);
  const [pickCoffee, setPickCoffee] = useState({});


  axios.get("/coffee/"+props.userId)
  .then(function (response) {
    setCaffeineRemain(response.data.remain);
  })

  function addNote(newCoffee) {
    const noteIndex = notes.findIndex(note => (
      note.coffeeName === newCoffee.coffeeName && note.cupSize === newCoffee.cupSize));

    if(noteIndex >= 0){
      let newNotes = [...notes];

      newNotes[noteIndex] = {...newNotes[noteIndex],
        cupNumber:newNotes[noteIndex].cupNumber+newCoffee.cupNumber,
        coffineAmount:newNotes[noteIndex].coffineAmount+newCoffee.coffineAmount};

      setNotes(newNotes);
    }else{
      setNotes(prevNotes => {
          return [...prevNotes, newCoffee];
        });
    }
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function clearCoffee(){
    setNotes([]);
  }

  function addPickCoffee(pickCoffee){
    setPickCoffee(pickCoffee);
    setCardStyle("showPickCoffeeContainer")
  }

  return (
    <div>

      {/* =========================================================== Header & Remain Coffine */}
      <Header
        remain = {caffeineRemain}
        userId={props.userId}
      />

      {/* =========================================================== Coffee Store */}
      <div className = "coffeStoreContainer">
        {coffeeBrands.map((coffee, index)=>{
          return (
            <CreateStore
              key={coffee.id}
              id={coffee.id}
              coffeeName={coffee.coffeeName}
              imgURL={coffee.imgURL}
              youtube={coffee.youtube}
              description={coffee.description}
              caffeine={coffee.caffeine}
              remain = {caffeineRemain}
              addPickCoffee={addPickCoffee}
            />
          );
        })}
      </div>
      {/* =========================================================== Selected Coffee */}
      <div className={cardStyle}>
        <PickCoffee
          totalSelection = {notes}
          coffeeName={pickCoffee.coffeeName}
          youtube={pickCoffee.youtube}
          description={pickCoffee.description}
          caffeine={pickCoffee.caffeine}
          setCardStyle={setCardStyle}
          remain = {caffeineRemain}
          onAdd={addNote}
          />
      </div>
      {/* =========================================================== Selected Coffee */}
      <div className = "selectedCoffeeContainer">
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              coffeeName={noteItem.coffeeName}
              cupSize={noteItem.cupSize}
              cupNumber={noteItem.cupNumber}
              coffineAmount={noteItem.coffineAmount}
              onDelete={deleteNote}
            />
          );
        })}
      </div>

      {/* =========================================================== Decision */}
      <Decision
        totalSelection = {notes}
        remain = {caffeineRemain}
        update={setCaffeineRemain}
        clear={clearCoffee}
        userId={props.userId}/>

      {/* =========================================================== Footer */}
      <Footer />

    </div>
  );
}

export default CoffeeBreak;
