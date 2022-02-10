import React from "react";

const TimeElapsedResetButton = ({ onResetTimer }) => {
  return <button onClick={() => onResetTimer()}>RESET</button>;
};

export default TimeElapsedResetButton;
