import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const navigate = useNavigate(); //useNavigate is a hook

  function login() {
    if (usernameInput == 'Sagar' && passwordInput == '123') {
      localStorage.setItem('isLoggedIn', 'true');
      //redirect to dashboard
      navigate('/dashboard');
    } else {
      alert('Invalid');
    }
  }

  return (
    <div>
      <input
        onChange={(e) => setUsernameInput(e.target.value)}
        value={usernameInput}
      />
      <input
        value={passwordInput}
        onChange={(e) => setPasswordInput(e.target.value)}
      />
      <button onClick={login}>Login</button>
      <h1>{usernameInput}</h1>
    </div>
  );
}
