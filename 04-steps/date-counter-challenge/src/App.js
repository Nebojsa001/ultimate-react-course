import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(1);

  const days = step * count;
  const today = new Date();
  today.setDate(today.getDate() + count * step);

  const handleStepClick = (value) => {
    setStep(value);
  };

  const handleCountClick = (operation, value) => {
    operation === "increase"
      ? setCount((prev) => prev + 1)
      : operation === "decrease"
      ? setCount((prev) => prev - 1)
      : setCount(value);
  };
  return (
    <div className="main-app">
      <ChangeStep handleOperation={handleStepClick} step={step} />
      <ChangeCount handleOperation={handleCountClick} count={count} />
      <p>
        {/* {days === 0 && `Today is ${today.toDateString()}`}  //my-way
        {days < 0 && `${days * -1} days ago was ${today.toDateString()}`}
        {days > 0 && `${days} days from today is ${today.toDateString()}`} */}
        <span>
          {days === 0 //jsonas way
            ? "Today is "
            : days > 0
            ? `${days} days from today is `
            : `${days * -1} ago was`}
        </span>{" "}
        <span>{today.toDateString()}</span>
      </p>
    </div>
  );
}

function UpdateDateBtn({ operation, handleOperation }) {
  return (
    <button className="change-btn" onClick={() => handleOperation(operation)}>
      {operation === "decrease" && "-"}
      {operation === "increase" && "+"}
    </button>
  );
}

function ChangeStep({ handleOperation, step }) {
  return (
    <div>
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => handleOperation(e.target.value)}
      ></input>
      <span>{step}</span>
    </div>
  );
}

function ChangeCount({ handleOperation, count }) {
  return (
    <div>
      <UpdateDateBtn operation="decrease" handleOperation={handleOperation} />
      <input
        type="text"
        value={count}
        onChange={(e) => handleOperation("", e.target.value)}
      ></input>
      <UpdateDateBtn operation="increase" handleOperation={handleOperation} />
    </div>
  );
}
