import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const ProgressTimer = ({countdownTimestampMs}) => {
  let seg = 0;
  let min = 0;

  const [segs, setSegs] = useState(0)
  const [mins, setMins] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(()=>{
        updateRemainingTime(countdownTimestampMs);
    },1000);
    return () => clearTimeout(intervalId)
  }, [countdownTimestampMs])
  

  function updateRemainingTime(){
    seg = seg + 1;
    setSegs(seg)
    
    if(seg>=60){
      min = min + 1;
      seg = 0;
      setSegs(seg)
      setMins(min)
      setTotal(seg * min)
    }else{
      setTotal(seg)
    }
    
  }

  return (
    <div>
      <CircularProgressbar
        value={total}
        text={`${mins}:${segs}`}
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
