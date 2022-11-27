import React from 'react';
import Mobile from './Mobile';

export default function MobileList() {
  //fetch data from API, hardcode it for now
  let upcomingProds = [
    {
      productName: 'Xiaomi Redmi k40',
      price: '22,490',
      imgSrc: 'mobile.jpg',
    },
    {
      productName: 'Xiaomi 11 Pro',
      price: '55,390',
      imgSrc: 'mobile.jpg',
      score: 97,
    },
    {
      productName: 'OPPO F21 Pro',
      price: '25,990',
      imgSrc: 'mobile.jpg',
    },
    {
      productName: 'Xiaomi Redmi k40',
      price: '22,490',
      imgSrc: 'mobile.jpg',
      score: 88,
    },
  ];
  let latestProds = [
    {
      productName: 'Apple iphone 13',
      price: '234,223',
      imgSrc: 'mobile.jpg',
      score: 91,
    },
    {
      productName: 'Vivo Pro',
      price: '35,360',
      imgSrc: 'mobile.jpg',
    },
    {
      productName: 'OPPO 11 Lite NE 5G',
      price: '52,120',
      imgSrc: 'mobile.jpg',
      score: 96,
    },
    {
      productName: 'Apple iphone 13',
      price: '234,223',
      imgSrc: 'mobile.jpg',
    },
  ];

  return (
    <>
      <h1 className="heading-big">Upcoming Mobiles </h1>
      <h5 className="heading-small">Upcoming Mobiles</h5>
      <div className="mobile-upcoming-list">
        {upcomingProds.map((x) => (
          <Mobile
            productName={x.productName}
            price={x.price}
            imgSrc={x.imgSrc}
            score={x.score}
          ></Mobile>
        ))}
      </div>

      <h1 className="heading-big">latest Mobiles </h1>
      <h5 className="heading-small">All Mobiles</h5>
      <div className="mobile-latest-list">
        {latestProds.map((x) => (
          <Mobile
            productName={x.productName}
            price={x.price}
            imgSrc={x.imgSrc}
            score={x.score}
          ></Mobile>
        ))}
      </div>
    </>
  );
}
