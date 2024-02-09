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
      return <h2>Critical Success!</h2>
    }
    else if(count>1 && count<target){
      return <h2>Failure</h2>
    }
    else if (count===1){
      return <h2>Critical Failure!</h2>
    }
    else if (count>=target && count<20){
      return <h2>Success</h2>}
    else if(count===0){
      return <h2>Roll Again...</h2>
    }
  }
  
  return (
    <>
      <div className="App" >
        <Contact />
          <h2>Target {target}</h2>
          <button onClick={rollDice}>Roll Dice</button>
          <h2>{count}</h2>
          {result()}
      </div>
    </>
    )
};

export default App;
