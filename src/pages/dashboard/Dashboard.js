import React from 'react';
import useRouteProtection from '../../hook/useRouteProtection';

export default function Dashboard() {
  useRouteProtection();
  return <div>Dashboard</div>;
}
