//class exercise -- create a Post component
import Post from './Post.js';
import './App.css';

//hardcode the object for now
let postObj = {
  heading: 'This was funny',
  author: 'Homer Simpson',
  body: 'So, I saw this video on Youtube and this guy was teaching ....',
};

//check if the any property of the object is null
function isEmpty(obj) {
  return Object.values(obj).some((x) => x === null || x === '');
}
//note: Object.values(obj) returns an array of a given object's own property values

console.log(isEmpty(postObj));

function App() {
  if (!isEmpty(postObj)) {
    return (
      <div className="App">
        <Post
          heading={postObj.heading}
          author={postObj.author}
          body={postObj.body}
        ></Post>
      </div>
    );
  }
}

export default App;
