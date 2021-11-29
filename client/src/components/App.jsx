import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import CoffeeBreak from "./CoffeeBreak";
import Login from "./Login";


function App() {

  const [userID, setUserID] = useState("");
  // console.log(userID);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login updateUserId = {setUserID}/>} />
        <Route path="/mycoffee" element={<CoffeeBreak userId = {userID}/>} />
      </Routes>
    </div>
  );
}

export default App;
