import React from 'react';

export default function GamingAccessories({
  fstimg,
  fsttitle,
  sndimg,
  sndtitle,
  link,
}) {
  return (
    <div className="container">
      <h3 className="heading">Gaming accessories</h3>
      <div className="pic-container">
        <div>
          <img src={fstimg}></img>
          <span>{fsttitle}</span>
        </div>
        <div>
          <img src={sndimg}></img>
          <span>{sndtitle}</span>
        </div>
      </div>
      <a className="see-more" href={link}>
        See More?
      </a>
    </div>
  );
}
