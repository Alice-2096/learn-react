import React, { useState } from 'react';

// ? initialize data
// ? the first profile is incomplete

export default function Profile() {
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [add, setAdd] = useState('');
  const [pic, setPic] = useState('');
  const [age, setAge] = useState('');

  async function getUser() {
    setUser({});
    setName('');
    setAdd('');
    setPic('');
    setAge('');

    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]);
        let name =
          user.name.title + ' ' + user.name.first + ' ' + user.name.last;
        setName(name);
        let add =
          user.location.street.number +
          ' ' +
          user.location.street.name +
          ', ' +
          user.location.city +
          ', ' +
          user.location.state +
          ', ' +
          user.location.country +
          ', ' +
          user.location.postcode;
        setAdd(add);
        setPic(user.picture.large);
        setAge(user.dob.age);
      });
  }

  return (
    //? why can we not directly access object properties like this: {user.location.street.number}
    <div className="profile-container">
      <img className="user-image" alt="user" src={pic}></img>
      <ul className="user-info">
        <li>
          <span>Name: </span> {name}
        </li>
        <li>
          <span>Gender: </span> {user.gender}
        </li>
        <li>
          <span>Email: </span> {user.email}
        </li>
        <li>
          <span>Location: </span>
          {add}
        </li>
        <li>
          <span>Age: </span>
          {age}
        </li>
      </ul>
      <i className="fa-solid fa-right" onClick={getUser}></i>
    </div>
  );
}
