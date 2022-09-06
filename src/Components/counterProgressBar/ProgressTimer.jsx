import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProgressTimer = ({countdownTimestampMs}) => {
  const navigate = useNavigate()
  let seg = 0;
  let calcSeg=0;
  let min = 0;

  const [segs, setSegs] = useState(0)
  const [totalSegs, setTotalSegs] = useState(0)
  const [mins, setMins] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(()=>{
        updateRemainingTime();
    },1000);
    return () => clearTimeout(intervalId)
  }, [countdownTimestampMs])
  

  function updateRemainingTime(){
    seg = seg + 1;
    calcSeg=calcSeg + 1;
    if(seg <= countdownTimestampMs){
      setSegs(seg)
      if(calcSeg>=60){
        min = min + 1;
        calcSeg = 0 ;
      }
      setMins(min)
      setTotalSegs(calcSeg)
    }else{
      if(calcSeg - 1 === countdownTimestampMs){
        Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
        )
        navigate("/Dashboard")
      }
    }
  }

  return (
    <div>
      <CircularProgressbar
        value={segs}
        maxValue={countdownTimestampMs}
        text={`${mins}:${totalSegs}`}
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
