import React from 'react';
import useRouteProtection from '../../hook/useRouteProtection';
import UserInformation from '../../UserInformation';

export default function Dashboard() {
  useRouteProtection();
  return (
    <div>
      <UserInformation></UserInformation>
    </div>
  );
}
