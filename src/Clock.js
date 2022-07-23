 import React, { useState, useEffect } from "react";
 
function Clock() {
  const [time, setTime] = useState(new Date());

  //useEffect(() => {
  const timerID=useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  
   // returning a cleanup function incase of unmount of clock component
   return function cleanup() {
    clearInterval(timerID);
  };
  
  }, []);

  return <div>{time.toString()}</div>;
}

export default Clock;
