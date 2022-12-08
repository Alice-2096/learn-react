import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default () => {
  const navigate = useNavigate();

  useEffect(() => {
    //this code will be execute on every pageload
    if (localStorage.getItem('isLoggedIn') != 'true') {
      navigate('/login');
    }
  }, []);

  // useEffect(() => {
  //   return () => {
  //     //do something on unmounting components
  //   };
  // }, []);

  // useEffect(() => {
  //   //do something on x's state change
  // }, [x]);
};
