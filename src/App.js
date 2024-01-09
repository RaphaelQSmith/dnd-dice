import React, { useState, useEffect } from "react";
import Contact from "./Title";

export const App = () => {
  const [count, setCount] = useState(0)
  const [target, setTarget] = useState(10)
    
  useEffect(() => {
    setTarget(Math.floor(Math.random()*21))
  }, [])
  
  const rollDice = () => {
    setCount(Math.floor(Math.random()*21))
  } 

  function result() {
    if(count===20){
      return <h1>Critical Success!</h1>
    }
    else if(count>1 && count<target){
      return <h1>Failure</h1>
    }
    else if (count===1){
      return <h1>Critical Failure!</h1>
    }
    else if (count>=target && count<20){
      return <h1>Success</h1>}
    else if(count===0){
      return <h1>Roll Again...</h1>
    }
  }
  
  return (
    <>
      <div className="App" >
        <Contact />
          <h1>Target {target}</h1>
          <button onClick={rollDice}>Roll Dice</button>
          <h2>{count}</h2>
          {result()}
      </div>
    </>
    )
};

export default App;
