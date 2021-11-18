import React, { useContext } from "react";
import { db } from "../firebase";


const ProductDetails = ({ product }) => {

    const currentProduct = {
        title: product.title,
        image: product.image,
        price: product.price,
        rating: product.rating,
        id: product.id
    }

    return (
        <li>
            <div className="title">{product.title}</div>
            <div className="image"><img src={product.image} alt="Product Preview Unavailable" /></div>
            <div className="price">${product.price}</div>
            <div className="rating">{product.rating}</div>
            <button>Add To Cart</button>
            <button onClick={() => {db.collection('products').doc(currentProduct.id).delete()}}>Remove Product</button>
        </li>
    )
}

export default ProductDetails