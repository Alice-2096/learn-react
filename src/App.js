//class exercise -- create a Post component
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

// //hardcode the object for now
// let postObj = {
//   heading: 'This was funny',
//   author: 'Homer Simpson',
//   body: 'So, I saw this video on Youtube and this guy was teaching ....',
// };

// //check if the any property of the object is null
// function isEmpty(obj) {
//   return Object.values(obj).some((x) => x === null || x === '');
// }
// //note: Object.values(obj) returns an array of a given object's own property values

function App() {
  // let [ratingVal, setRatingVal] = useState(0);
  // function changeVal(newVal) {
  //   setRatingVal(newVal);
  // }

  let _items = ['apple', 'samsung', 'htc'];
  let [items, setItems] = useState(_items);

  function _delete(itemName) {
    setItems((items) => items.filter((x) => x !== itemName));
  }

  return (
    <div className="App">
      {/* <Rating onChange={changeVal}></Rating>
      <h1>{ratingVal}</h1> */}
      <Names items={items} onclick={_delete}></Names>
    </div>
  );
}

export default App;
