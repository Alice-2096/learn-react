import React from 'react';

export default function Rating({ value }) {
  function filledStar(value) {
    let val = value;
    let jsx = [];
    while (val !== 0) {
      jsx.push(<span className="purple">&#9733;</span>);
      val--;
    }
    return jsx;
  }

  function emptyStar(value) {
    let val = 5 - value;
    let jsx = [];
    while (val !== 0) {
      jsx.push(<span>&#9733;</span>);
      val--;
    }
    return jsx;
  }

  return (
    <div className="star-container">
      {filledStar(value)}
      {emptyStar(value)}
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