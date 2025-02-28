import { useState } from "react";
import React from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)

  const handleCartClick = () =>{
    setIsInCart(!isInCart)
  }

  return (
    <li className={isInCart ? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartClick}>{isInCart ? "Remove From Cart": "Add to Cart"}</button>
    </li>
  );
}

export default Item;
