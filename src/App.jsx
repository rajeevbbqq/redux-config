import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/actions/counterActions";

function App() {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const changeCount = () => {
    dispatch(increment());
  };

  const decrementValue = () => {
    dispatch(decrement());
  };

  return (
    <div className="App">
      <h1>Counter {count}</h1>
      <button onClick={changeCount}>Increment</button>
      <button onClick={decrementValue}>Decrement</button>
    </div>
  );
}

export default App;
