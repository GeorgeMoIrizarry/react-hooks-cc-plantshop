import React, { useState } from "react";

function PlantCard( {name, image, price}) { 
  const [stockStatus, setStockStatus] = useState(true)
  function handleClick() {
    setStockStatus(!stockStatus)
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stockStatus ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
