import React from 'react';
import { useContext } from 'react';
import UserDataContext from './shared/data/UserGlobalData';

export default function UserInformation() {
  const { username } = useContext(UserDataContext);
  return <div>Username:- {username}</div>;
}
