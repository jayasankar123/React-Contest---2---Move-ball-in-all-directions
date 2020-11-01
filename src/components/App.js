import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  const reset = () => {
    setX(0);
    setY(0);
    setBallPosition({ left: "0px", top: "0px" });
    setRenderBall(false);
  };
  function buttonClickHandler() {
    setRenderBall(true);
  }
  const renderChoice = () => {
    if (renderBall) {
      return <div className="ball" style={ballPosition}></div>;
    } else
      return (
        <button className="start" onClick={buttonClickHandler}>
          Start
        </button>
      );
  };
  function handleEventListener(event) {
    if (event.key === "ArrowRight") {
      setX(x + 5);
      setBallPosition({ left: `${x + 5}px`, top: ballPosition.top });
      //console.log(event.key + " clicked");
    } else if (event.key === "ArrowLeft") {
      setX(x - 5);
      setBallPosition({ left: `${x - 5}px`, top: ballPosition.top });

      //console.log(event.key + " clicked");
    } else if (event.key === "ArrowUp") {
      setY(y - 5);
      setBallPosition({ top: `${y - 5}px`, left: ballPosition.left });

      //console.log(event.key + " clicked");
    } else if (event.key === "ArrowDown") {
      setY(y + 5);
      setBallPosition({ top: `${y + 5}px`, left: ballPosition.left });

      //console.log(event.key + " clicked");
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", handleEventListener);
    return () => document.removeEventListener("keydown", handleEventListener);
  });

  return (
    <div className="playground">
      {renderChoice()}
      <button onClick={reset} className="reset">
        Reset
      </button>
    </div>
  );
};

export default App;
