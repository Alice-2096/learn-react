import React, { useState } from 'react';

export default function Counter({ num }) {
  let [number, setNumber] = useState(num); //useState is used to initialize the environment, it is called a hook

  function increment() {
    // number = number + 1;
    setNumber(number + 1); //this is a function to change the value of 'number'
  }

  function decrement() {
    setNumber(number - 1);
  }

  return (
    <div className="counter">
      <span className="sign">-</span>
      <span className="num">{num}</span>
      <span className="sign" onClick={increment()}>
        +
      </span>
    </div>
  );
}
