import './App.css';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/Login.js';
import Dashboard from './pages/dashboard/Dashboard.js';
import About from './pages/About/About.js';
import SignUp from './pages/sign-up/SignUp.js';
import NotFound from './shared/components/NotFound';
import Header from './shared/components/Header';
import CounterWithClass from './shared/components/CounterWithClass';
import Accordion from './Accordion';
import Tiktoc from './Tiktoc';
import HeadingPortal from './portal/HeadingPortal';
import UserDataContext from './shared/data/UserGlobalData';

function App() {
  // let [ratingVal, setRatingVal] = useState(0);
  // function changeVal(newVal) {
  //   setRatingVal(newVal);
  // }

  // let _items = ['apple', 'samsung', 'htc'];
  // let [items, setItems] = useState(_items);

  // function _delete(itemName) {
  //   setItems((items) => items.filter((x) => x !== itemName));
  // }

  const [userData, setUserData] = useState({ username: 'Sagar' });

  return (
    <div className="App">
      <UserDataContext.Provider value={userData}>
        <Header></Header>
        <hr></hr>
        <Routes>
          {/* go to 'domain/counter' will see Mobilepage Component only */}
          {/* <Route path="/mobile" element={<MobilePage></MobilePage>}></Route>
          // redirection
          <Route path="/feedback" element={<Navigate to="/mobile" />}></Route> */}
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="sign-up" element={<SignUp></SignUp>}></Route>
          <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </UserDataContext.Provider>
      {/* <CounterWithClass start={5}></CounterWithClass>
      {/* <Accordion heading={'hello'} content={'this is a test'}></Accordion>
      <Tiktoc></Tiktoc> */}

      {/* portal */}
      {/* <HeadingPortal></HeadingPortal> */}
    </div>
  );
}

export default App;
