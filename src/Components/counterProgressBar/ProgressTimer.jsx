import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import Swal from "sweetalert2";

const ProgressTimer = ({countdownTimestampMs}) => {
  let seg = 0;
  let calcSeg=0;
  let min = 0;
  const [intervalTime, setIntervalTime]= useState(1000)

  const [segs, setSegs] = useState(0)
  const [totalSegs, setTotalSegs] = useState(0)
  const [mins, setMins] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(()=>{
        updateRemainingTime();
    },intervalTime);
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
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
      setIntervalTime(0)
    }
    /* if(countdownTimestampMs >= segs*mins){
      if(seg>=60){
            min = min + 1;
            seg = 0;
            setSegs(seg)
            setMins(min)
            setTotal(seg * min)
          }else{
            setSegs(seg)
            if(min<=0){
              setTotal(seg*1)
            }else{
              setTotal(seg*min)
            }
            
          }
    }else{
      console.log("Se completo");
    } */
    
    
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
