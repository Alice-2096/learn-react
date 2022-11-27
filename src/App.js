//inclass exercise
import Post from './Post.js';
import './App.css';
import CustomButton from './CustomButton.js';
import Counter from './Counter.js';
import GamingAccessories from './GamingAccessories.js';
import Button from './Button.js';
import RoundButton from './RoundButton.js';
import Product from './Product.js';
import Rating from './Rating.js';
import { useState } from 'react';
import Names from './Names.js';
import Formdemo from './Formdemo.js';

// Nov26 Homework
import QandA from './QandA.js';
import SongPage from './SongPage.js';
import NumGenerator from './NumGenerator.js';
import MobilePage from './MobilePage.js';

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
      {/* transition css is not working?? */}
      {/* <QandA></QandA> */}

      {/* where to add the sort method? */}
      {/* <SongPage></SongPage> */}

      {/* <NumGenerator></NumGenerator> */}

      {/* need to fix css magnifier | scroll to the right  */}
      {/* <MobilePage></MobilePage> */}
    </div>
  );
}

export default App;
