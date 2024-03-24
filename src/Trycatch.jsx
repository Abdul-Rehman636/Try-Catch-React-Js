import React from "react";
import "./styling.css";

function Trycatch() {
  function Button1() {
    try {
      alert("You have clicked this button");
    } catch (error) {
      throw new Error(error);
    }
  }
  return (
    <div id="div-1">
      <div id="div-2">
        <h1 id="heading-1">Try catch example</h1>
        <button id="button-1" onClick={Button1}>
          Click Here!
        </button>
      </div>
    </div>
  );
}

export default Trycatch;
