import { useNavigation } from 'react-router-dom';

//this is a hook
export default () => {
  localStorage.clear();
  const navigate = useNavigation();
  navigate('/login');
};
