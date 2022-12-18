import React, { useState } from 'react';

//apipheny

export default function CatFact() {
  const [fact, setFact] = useState('');

  function getFact() {
    fetch('https://catfact.ninja/fact')
      .then((res) => res.json()) //convert from JSON to js object, json is a Promise object
      .then((response) => {
        //got response, which is an object
        setFact(response.fact);
      });
    setFact('a new fact');
  }

  return (
    <div>
      <button onClick={getFact}>get cat fact</button>
      <br></br>
      <p>{fact}</p>
    </div>
  );
}
