import React from 'react';

export default function Mobile({ productName, price, imgSrc, score = 100 }) {
  return (
    <div className="product-container">
      <div className={score === 100 ? 'discount hidden' : 'discount'}>
        {score} % <span className="spec-score">SPEC SCORE</span>
      </div>
      <img className="mobile-pic" src={imgSrc} alt="mobile"></img>
      <h4 className="prod-name">{productName}</h4>
      <div className="price">
        <h4 className="prod-price"> Rs. {price}</h4>
        <span className="expected">(Expected)</span>
      </div>
      <button className="view-detail-btn">View Details</button>
    </div>
  );
}
