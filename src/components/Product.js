import React from "react";
import { Link } from "react-router-dom";
import 'animate.css';

import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: Number(price),
        rating: Number(rating),
      }
    });
  };

  const handleChat = () => {

  };

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating).fill().map((_) => (<p key={Math.random()}>⭐</p>))}
        </div>
      </div>

      <img src={image} alt={title} />
      <button onClick={addToCart}>Add to Cart</button>
      <Link to="/chat">
        <button onClick={handleChat}>Chat with Seller</button>
      </Link>
    </div>
  );
}

export default Product;
