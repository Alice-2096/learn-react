import React, { useState } from 'react';

export default function Formdemo() {
  const [userNameInput, setUserNameInput] = useState('');

  function login() {
    if (userNameInput !== '') alert(`welcome ${userNameInput}`);
  }

  return (
    <div>
      {/* link a state with a textbox -- this is called 'two-way binding' */}
      <input
        value={userNameInput} //writing to input box is a synthetic event -- event triggered on every keypress, instead of native event -- so we need to manually update the value
        onChange={(e) => setUserNameInput(e.target.value)}
      />
      <button onClick={login}>Login</button>
      <h1>{userNameInput}</h1>
    </div>
  );
}
