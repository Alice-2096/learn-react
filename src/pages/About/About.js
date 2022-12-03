import React, { useEffect } from 'react';
import useRouteProtection from '../../hook/useRouteProtection';

export default function About() {
  useRouteProtection();
  return <div>About</div>;
}
