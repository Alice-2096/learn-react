import { createContext } from 'react';

let data = { username: '' };
const UserDataContext = createContext(data); //pass a template or empty object {}

export default UserDataContext;
