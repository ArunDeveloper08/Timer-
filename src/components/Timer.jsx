import React, { useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  let intervalRef = useRef(null);

  const startTimer = () => {
    if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          setCount(prevCount => prevCount + 1);
        }, 1000);
      }
  };

   const resetTimer=()=>{
    setCount(0);
    clearInterval(intervalRef.current)
    intervalRef.current = null; 
   }

   const pauseTimer=()=>{
    clearInterval(intervalRef.current)
    intervalRef.current = null; 
   }
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => startTimer()}>Start</button>
      <button onClick={() => resetTimer()}>Reset</button>
      <button onClick={() => pauseTimer()}>Pause</button>
    </div>
  );
};

export default Timer;
