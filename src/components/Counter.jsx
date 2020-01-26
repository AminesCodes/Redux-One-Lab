import React from "react";

const Counter = ({ value, onIncrement, onDecrement, onIncrementIfOdd, onIncrementIfEven, onDelayedIncrement }) => (
  <div>
    <p>value: {value}</p>
    <p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <br />
      <button onClick={onIncrementIfOdd}>Increment if ODD</button>
      <button onClick={onIncrementIfEven}>Increment if EVEN</button>
      <button onClick={onDelayedIncrement}>DELAYED Increment</button>
    </p>
  </div>
);

export default Counter;
