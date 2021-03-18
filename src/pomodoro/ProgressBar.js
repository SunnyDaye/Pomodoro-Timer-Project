import React from "react";

function ProgressBar({ percentComplete }) {
  return (
    <div className="progress" style={{ height: "20px" }}>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        //increment valuenow for progress visual
        aria-valuenow={percentComplete} 
        style={{ width: `${percentComplete}%` }} 
      />
    </div>
  );
}
export default ProgressBar;