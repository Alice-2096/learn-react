// function commonFetch(url) {
//   return fetch(url).then((res) => res.json());
// }

function commonFetch(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => resolve(res.json()))
      .catch((err) => reject({ err, message: 'a custom error message.' }));
  });
}

commonFetch()
  .then()
  .catch((err) => {});
