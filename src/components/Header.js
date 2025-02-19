import React from 'react';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price + props.car.features.reduce((a, e) => a + e.price, 0)}</p>
    </>
  );
};

export default Header;
