import React from 'react';
import MobileList from './MobileList';
import './Mobile.css';

export default function MobilePage() {
  return (
    <div>
      <header className="mobile-page-header">
        <img className="logo" src="mobile-logo.jpg" alt="mobile-logo"></img>
        <span>Mobiles & More</span>
        <span>Top 10</span>
        <span>Compare</span>
        <span>Upcoming Mobiles</span>
        <form className="search-bar">
          <input defaultValue="Search for products or brands"></input>
          <i class="fa-solid fa-magnifying-glass"></i>
        </form>
        <span>Login</span>
      </header>
      <div className="mobile-page-body">
        <MobileList></MobileList>
      </div>
    </div>
  );
}
