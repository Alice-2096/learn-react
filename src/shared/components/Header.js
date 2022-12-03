import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../../hook/Logout';

export default function Header() {
  return (
    <div>
      <Link to={'/about'}>About</Link>
      <Link to={'/dashboard'}>Dashboard</Link>
      <Link to={'/sign-up'}>Sign up</Link>
      <Link to={'/login'}>Login</Link>
      <button onClick={Logout}>LogOut</button>
    </div>
  );
}
