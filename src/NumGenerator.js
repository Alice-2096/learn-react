import React, { useState } from 'react';

export default function NumGenerator() {
  //declare both user input and output array as state variables, because we need to re-render the page upon changing these variables.
  let [inputVal, setInputVal] = useState();
  let [numArray, setNumArray] = useState([]);

  function generate_nums(inputVal) {
    let counter = 1;
    let val = inputVal;
    let tmpArr = [];
    while (counter <= 10) {
      tmpArr.push(<div>{val * counter}</div>);
      counter++;
    }
    // setNumArray is async, setState function should always go outside of a loop
    setNumArray(tmpArr);

    //reset input
    setInputVal('');
  }

  return (
    <div>
      <h1>Generate Number Table</h1>
      {/* two way binding */}
      <input
        onChange={(e) => setInputVal(e.target.value)}
        value={inputVal}
      ></input>
      <button onClick={() => generate_nums(inputVal)}>generate</button>
      <h3>Output</h3>
      <div className="output">{numArray}</div>
    </div>
  );
}
