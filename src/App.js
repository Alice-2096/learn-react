//class exercise -- create a Post component
import Post from './Post.js';
import './App.css';
import CustomButton from './CustomButton.js';
import Counter from './Counter.js';
import GamingAccessories from './GamingAccessories.js';
import Button from './Button.js';
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

// console.log(isEmpty(postObj));

// //pass variable as props
// function App() {
//   if (!isEmpty(postObj)) {
//     return (
//       <div className="App">
//         <Post
//           heading={postObj.heading}
//           author={postObj.author}
//           body={postObj.body}
//         ></Post>
//       </div>
//     );
//   }
// }

function App() {
  //do something
  return (
    <div className="App">
      <CustomButton text={'HTML'}></CustomButton>
      <CustomButton text={'CSS'}></CustomButton>
      <CustomButton text={'React'}></CustomButton>

      {/* <Counter num={2}></Counter>
      <Counter num={3}></Counter>
      <Counter num={4}></Counter> */}

      {/* <GamingAccessories
        fstimg={'./earphone.jpg'}
        fsttitle={'earphone'}
        sndimg={'./keyboard.jpg'}
        sndtitle={'keyboard'}
        link={''}
      ></GamingAccessories> */}
      {/* <Button></Button> */}
    </div>
  );
}

export default App;
