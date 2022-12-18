let a = setInterval(() => {
  console.log('hello');
}, 3000);

clearInterval(a);

function func(callback) {
  setTimeout(() => {
    //what the function do --'A'
    callback(); //do this after we did 'A'
  }, 3000);
}

//callback hell: the problem of having a very bloated nested callback function

//promise
const func2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //what the function should do after 3 secs.
    //
    resolve();
  }, 3000);
});

//setTimeout does not return anything. To solve this problem, use Promise, resolve(data).

// resolve(data) is the return for Promise: 2 ways to receive data: 1. use await, 2. use .then()

//usually we don't need to write Promises. we can use ready-made Promises like fetch: accept an url, return JSON response from server
fetch('url')
  .then((response) => response.json())
  .then((data) => console.log(data));

//client-server architecture: client render webpages UI by consuming data, server sends data through api.
