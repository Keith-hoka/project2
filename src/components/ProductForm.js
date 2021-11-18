import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

import "./ProductForm.css";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";

const ProductForm = () => {
  const [{ user }] = useStateValue();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    let productsArr = [];

    db.collection("users").get(user?.uid).then(snapshot => {
      snapshot.forEach(doc => {
        if (doc.data().products.length){
          productsArr = productsArr.concat(doc.data().products);
          console.log(productsArr);
        }
      }
    )})
    .then(()=>{
            db.collection("users").doc(user?.uid).set(
            {products: [...productsArr, {
              id: Math.random(),
              title: title,
              image: image,
              price: Number(price),
              rating: Number(rating),
            }]
          })});

    history.push("/");

    setTitle('');
    setImage('');
    setPrice('');
    setRating('');
  };

  return (
    <div className="product-formContainer" noValidate autoComplete="off">
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="product-input">
          <TextField variant="outlined" label="Product Title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="product-input">
          <TextField variant="outlined" label="Product Image URL" type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </div>
        <div className="product-input">
          <TextField variant="outlined" label="Product Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div className="product-input">
          <TextField variant="outlined" label="Rating" type="number" value={rating} onChange={(e) => setRating(e.target.value)} required />
        </div>

        <Button className="product-button" type="submit" variant="contained">Post you Product</Button>
      </form>
    </div>
  );
}



export default ProductForm;
