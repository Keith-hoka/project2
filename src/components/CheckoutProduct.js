import React from "react";
import 'animate.css';

import { useStateValue } from "./StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, image, price, rating, hideButton }) {
  const [{ cart }, dispatch] = useStateValue();
  console.log(cart);

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    })
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={image} alt="" />

      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>

        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct-rating">
          {Array(rating).fill().map((_) => (<p key={Math.random()}>⭐</p>))}
        </div>
        {!hideButton && (
          <button onClick={removeFromCart}>Remove from Cart</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
