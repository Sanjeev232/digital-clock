import { useState } from "react";
import "./App.css";

const initialTime = new Date().toLocaleString();

function App() {
  let [time1, setTime1] = useState(initialTime);
  let [time2, setTime2] = useState(initialTime);

  function tick(isTime1Update) {
    const time = new Date().toLocaleString();
    isTime1Update ? setTime1(time) : setTime2(time);
  }

  function runClocks() {
    const seconds = new Date().getSeconds();

    seconds % 2 === 0 ? tick("time1") : tick(null);
  }

  setInterval(runClocks, 1000);

  return (
    <>
      <div className="time-container">
        <h1 className="p-tag">Current Time</h1>
        <h2 class="p-tag">React.js</h2>
        <div className="jsClock">{time1}</div>
        <div className="jsClock">{time2}</div>
      </div>
    </>
  );
}

export default App;
