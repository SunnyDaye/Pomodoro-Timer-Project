import React from "react";

function Duration({ label, onIncrease, onDecrease, testid }) {
  return (
    <div className="input-group input-group-lg mb-2">
      {/*Update to display current duration*/}
      <span className="input-group-text" data-testid={`duration-${testid}`}>
        {label}
      </span>


      {/*Implement duration to descreas. Make sure to disable during session */}
      <div className="input-group-append">
        <button
          type="button"
          className="btn btn-secondary"
          data-testid={`decrease-${testid}`}
          onClick={onDecrease}
        >
          <span className="oi oi-minus" />
        </button>


        {/*Implement increasing focus duration  and disable during a focus or break session */}
        <button
          type="button"
          className="btn btn-secondary"
          data-testid={`increase-${testid}`}
          onClick={onIncrease}
        >
          <span className="oi oi-plus" />
        </button>


      </div>
    </div>
  );
}
export default Duration;