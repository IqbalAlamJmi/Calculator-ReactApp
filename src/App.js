import React from "react";
import "./App.css";
import { useState, useRef } from "react";

const App = () => {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };
  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
  const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };
  const times = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };
  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };
  const resetResult = (e) => {
    e.preventDefault();
    setResult((prevResult) => prevResult * 0);
  };

  return (
    <>
      <div className="App">
        <h1>*************************</h1>
        <form>
          <p className="total" ref={resultRef}>Total : {result}</p>
          <input className="inp"
            pattern="[0-9]"
            ref={inputRef}
            type="number"
            placeholder="Type a number"
          />
          <br />
          <br />
          <button className="btn" onClick={plus}>
            Add
          </button>
          <button className="btn" onClick={minus}>
            Substract
          </button>
          <button className="btn" onClick={divide}>
            Divide
          </button>
          <button className="btn" onClick={times}>
            Multiply
          </button>
          <button className="btn" onClick={resetInput}>
            Reset Input
          </button>
          <button className="btn" onClick={resetResult}>
            Reset Result
          </button>
        </form>
        <br />
        <h1>*************************</h1>
      </div>
    </>
  );
};

export default App;
