
import React from 'react';

const SkipCard = ({ size, duration, price, allowsHeavy, allowedOnRoad }) => {
  return (
    <div className="card">
      <div className="badge">{size}</div>
      <img
        src=".\bin-image.jpg"
        alt="Skip"
        className="skip-img"
      />
      <h3>{size} Skip</h3>
      <p className="duration">{duration}</p>
      <p className="price">£{price} inc. VAT</p>
      <ul className="features">
        <li>{allowsHeavy ? '✔️ Handles heavy waste' : '❌ No heavy waste'}</li>
        <li>{allowedOnRoad ? '✔️ Road placement allowed' : '❌ Road placement not allowed'}</li>
      </ul>
      <button className="btn">Select This Skip </button>
    </div>
  );
};

export default SkipCard;
