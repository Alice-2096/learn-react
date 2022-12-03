import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Link to={'/about'}>About</Link>
      <Link to={'/dashboard'}>Dashboard</Link>
      <Link to={'/sign-up'}>Sign up</Link>
      <Link to={'/login'}>Login</Link>
      <Link to={'/logout'}>LogOut</Link>
    </div>
  );
}
