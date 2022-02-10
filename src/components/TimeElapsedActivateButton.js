import React from "react";

const TimeElapsedActivateButton = ({ timer, onStartTimer, onStopTimer }) => {
  return timer.isRunning ? (
    <button onClick={() => onStopTimer()}>STOP</button>
  ) : (
    <button onClick={() => onStartTimer()}>START</button>
  );
};

export default TimeElapsedActivateButton;
