import React, { useEffect, useState } from 'react';

export default function Profile() {
  //need to initialize a dummy object like this:
  const dummy = {
    name: { first: '', last: '' },
    gender: '',
    picture: { large: '', medium: '', small: '' },
    email: '',
  };

  const [user, setUser] = useState(dummy);

  function getUser() {
    //reset
    setUser(dummy);

    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]);
      });
  }

  //fetch data on page load
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="profile-container">
      <img className="user-image" alt="user" src={user.picture.large}></img>
      <ul className="user-info">
        <li>
          <span>
            Name: {user.name.first} {user.name.last}
          </span>
        </li>
        <li>
          <span>Gender: </span> {user.gender}
        </li>
        <li>
          <span>Email: </span> {user.email}
        </li>
      </ul>
      <i className="fa-solid fa-right" onClick={getUser}></i>
    </div>
  );
}
