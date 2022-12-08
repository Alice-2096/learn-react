import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate(); //hooks should be the direct children of the component. should not be placed inside of a regular function

  function logout() {
    localStorage.clear();
    navigate('/login');
  }

  return (
    <div>
      <Link to={'/about'}>About</Link>
      <Link to={'/dashboard'}>Dashboard</Link>
      <Link to={'/sign-up'}>Sign up</Link>
      <Link to={'/login'}>Login</Link>
      <button onClick={logout}>LogOut</button>
    </div>
  );
}
