import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const ProgressTimer = ({countdownTimestampMs}) => {
  let num = 1;
  const [first, setfirst] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(()=>{
        updateRemainingTime(countdownTimestampMs);
    },1000);
    return () => clearTimeout(intervalId)
  }, [countdownTimestampMs])
  

  function updateRemainingTime(){
    num = num + 1;
    setfirst(num)
  }

  return (
    <div>
      <span>{first}</span>
      <CircularProgressbar
        value={first}
        text={`${first}`}
        styles={buildStyles({
          trailColor: "#d6d6d6",
          pathColor: "#0FC185",
          textColor: "#0FC185",
        })}
      />
    </div>
  );
};

export default ProgressTimer;
