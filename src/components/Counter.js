import React, { useState } from "react"; // let us hook to react internal state for this component

function Counter() {

  // State => how to respond to change dynamically using reacts internal state system
  // Its data thats dynamic in your component / changes overtime

  // we tell react to create an internal state for component with an initial value of 0 and returns two variables
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1); // setter functions purpose is to update state; when we want to update sth , just call it
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
