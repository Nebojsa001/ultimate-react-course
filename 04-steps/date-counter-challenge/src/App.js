import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  const days = step * count;
  const today = new Date();
  today.setDate(today.getDate() + count * step);

  const handleStepClick = (operation) => {
    operation === "increase"
      ? setStep((prev) => prev + 1)
      : setStep((prev) => prev - 1);
  };

  const handleCountClick = (operation) => {
    operation === "increase"
      ? setCount((prev) => prev + 1)
      : setCount((prev) => prev - 1);
  };
  return (
    <div className="main-app">
      <h1>Hellow wlcm to date counter</h1>
      <ChangeDate type="Step" step={step} handleOperation={handleStepClick} />
      <ChangeDate
        type="Count"
        step={count}
        handleOperation={handleCountClick}
      />
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

function ChangeDate({ type, step, handleOperation }) {
  return (
    <div>
      <UpdateDateBtn operation="decrease" handleOperation={handleOperation} />
      <span>
        {type} {step}:
      </span>
      <UpdateDateBtn operation="increase" handleOperation={handleOperation} />
    </div>
  );
}

export default App;
