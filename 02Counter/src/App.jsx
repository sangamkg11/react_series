import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);
  // let counter = 15;
  const addValue = () => {
    if (counter >= 20) {
      return;
    } else {
      // counter += 1;
      setCounter(counter + 1);
      console.log("clicked", counter);
    }
  };

  const decValue = () => {
    if (counter <= 0) {
      return;
    } else {
      counter -= 1;
      setCounter(counter);
    }
  };
  return (
    <>
      <h1>Welcome to counting system</h1>
      <h3>Counter Value: {counter}</h3>
      <button type="button" onClick={addValue}>
        Add value
      </button>
      <br />
      <br />
      <button type="button" onClick={decValue}>
        Decrease value
      </button>
    </>
  );
}

export default App;
