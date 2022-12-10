import React, { useEffect } from 'react';
import useRouteProtection from '../../hook/useRouteProtection';
import Counter from '../../Counter.js';

export default function About() {
  useRouteProtection();
  return <div>About</div>;
}
