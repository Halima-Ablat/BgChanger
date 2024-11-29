import React, { useState } from "react";

function BgChanger() {
  const [color, setColor] = useState("");

  function handleRedColor() {
    const redColor = (document.body.style.backgroundColor = "red");
    setColor(redColor);
  }

  function handleGreenColor() {
    const greenColor = (document.body.style.backgroundColor = "green");
    setColor(greenColor);
  }

  function handleBlueColor() {
    const blueColor = (document.body.style.backgroundColor = "blue");
    setColor(blueColor);
  }

  return (
    <>
      <div
        className="p-2 rounded-pill bg-light d-flex align-items-center"
        style={{ width: "300px", height: "100px" }}
      >
        <button
          className="btn btn-danger me-3 rounded-pill px-4"
          onClick={handleRedColor}
        >
          Red
        </button>
        <button
          className="btn btn-success me-3 rounded-pill px-4"
          onClick={handleGreenColor}
        >
          Green
        </button>
        <button
          className="btn btn-primary rounded-pill px-4"
          onClick={handleBlueColor}
        >
          Blue
        </button>
      </div>
    </>
  );
}

export default BgChanger;
