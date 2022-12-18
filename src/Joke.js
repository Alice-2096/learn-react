import React, { useState } from 'react';

export default function Joke() {
  const [setup, setSetup] = useState('');
  const [punchline, setPunchline] = useState('');

  function getJoke() {
    setPunchline(''); //reset
    setSetup(''); //reset

    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((res) => res.json())
      .then((data) => {
        setSetup(data.setup);
        setTimeout(() => {
          setPunchline(data.punchline);
        }, 3000);
      });
  }

  return (
    <div>
      <button onClick={getJoke}>Click here to get a joke!</button>
      <br></br>
      <p>{setup}</p>
      <p>{punchline}</p>
    </div>
  );
}
