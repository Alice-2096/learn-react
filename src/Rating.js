import React, { useState } from 'react';

export default function Rating({ onChange }) {
  let [val, setVal] = useState(0);

  // function filledStar(value) {
  //   let val = value;
  //   let jsx = [];
  //   while (val !== 0) {
  //     jsx.push(<span className="purple">&#9733;</span>);
  //     val--;
  //   }
  //   return jsx;
  // }

  // function emptyStar(value) {
  //   let val = 5 - value;
  //   let jsx = [];
  //   while (val !== 0) {
  //     jsx.push(<span>&#9733;</span>);
  //     val--;
  //   }
  //   return jsx;
  // }

  return (
    // <div className="star-container">
    //   {filledStar(value)}
    //   {emptyStar(value)}
    // </div>
    <div>
      <span
        onClick={function showStar() {
          setVal(1);
          onChange(1);
        }}
        className={val >= 1 ? 'purple' : ''}
      >
        &#9733;
      </span>
      <span
        onClick={function showStar() {
          setVal(2);
          onChange(2);
        }}
        className={val >= 2 ? 'purple' : ''}
      >
        &#9733;
      </span>
      <span
        onClick={function showStar() {
          setVal(3);
          onChange(3);
        }}
        className={val >= 3 ? 'purple' : ''}
      >
        &#9733;
      </span>
      <span
        onClick={function showStar() {
          setVal(4);
          onChange(4);
        }}
        className={val >= 4 ? 'purple' : ''}
      >
        &#9733;
      </span>
      <span
        onClick={function showStar() {
          setVal(5);
          onChange(5);
        }}
        className={val >= 5 ? 'purple' : ''}
      >
        &#9733;
      </span>
    </div>
  );
}

// alternatively, use conditional rendering

/* <div>
      <span className={value >= 1 ? "purple" : "text-gray"}>&#9733;</span>
      <span className={value >= 2 ? "purple" : "text-gray"}>&#9733;</span>
      <span className={value >= 3 ? "purple" : "text-gray"}>&#9733;</span>
      <span className={value >= 4 ? "purple" : "text-gray"}>&#9733;</span>
      <span className={value >= 5 ? "purple" : "text-gray"}>&#9733;</span>
    </div> 
*/
