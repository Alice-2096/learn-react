import { useNavigation } from 'react-router-dom';

//this is a hook
export default function () {
  const navigate = useNavigation();
  function logout() {
    localStorage.clear();
    navigate('/login');
  }
  return logout;
}

//A hook can be inside another hook, but you cannot invoke the hook directly inside a regular function.
