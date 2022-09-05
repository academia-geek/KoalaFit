import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

const ProgressTimer = () => {

  return (
    <div>
      <h2>{timer}</h2>
      <button onClick={onClickReset}>Reset</button>
      <CircularProgressbar
        value={20}
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
