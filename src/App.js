//inclass exercise
import Post from './Post.js';
import './App.css';
import CustomButton from './CustomButton.js';
import Counter from './Counter.js';
import GamingAccessories from './GamingAccessories.js';
import Button from './shared/components/Button.js';
import RoundButton from './RoundButton.js';
import Product from './Product.js';
import Rating from './shared/components/Rating.js';
import { useState } from 'react';
import Names from './Names.js';
import Formdemo from './Formdemo.js';

// Nov26 Homework
import QandA from './QandA.js';
import SongPage from './SongPage.js';
import NumGenerator from './NumGenerator.js';
import MobilePage from './MobilePage.js';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login/Login.js';
import Dashboard from './pages/dashboard/Dashboard.js';
import About from './pages/About/About.js';
import SignUp from './pages/sign-up/SignUp.js';

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

  return (
    <div className="App">
      {/* <QandA></QandA> */}

      {/* <SongPage></SongPage> */}

      {/* <NumGenerator></NumGenerator> */}

      {/* need to fix css magnifier | scroll to the right  */}
      {/* <MobilePage></MobilePage> */}
      <Routes>
        {/* go to 'domain/counter' will see Mobilepage Component only */}
        {/* <Route path="/mobile" element={<MobilePage></MobilePage>}></Route>
        // redirection 
        <Route path="/feedback" element={<Navigate to="/mobile" />}></Route> */}

        <Route path="login" element={<Login></Login>}></Route>
        <Route path="sign-up" element={<SignUp></SignUp>}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
