import React from "react";
import 'animate.css';
/*import { makeStyles } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';
import Box from '@material-ui/core/Box';*/

import "./Product.css";
import { useStateValue } from "./StateProvider";

/*const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});*/

function Product({ id, title, price, rating, image }) {
  /*const classes = useStyles();*/
  const [{ cart }, dispatch] = useStateValue();
  console.log(cart);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    });
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
          {Array(rating).fill().map((_) => (<p>⭐</p>))}
        </div>
      </div>

      <img src={image} alt={title} />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
