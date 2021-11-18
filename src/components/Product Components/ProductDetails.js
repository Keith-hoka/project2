import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

const ProductDetails = ({ product }) => {
    const { removeProduct } = useContext(ProductContext)
    return (
        <li onCLick={() => removeProduct(product.id)}>
            <div className="title">{product.title}</div>
            <div className="image"><img src={product.image} alt="Product Preview Unavailable"></img></div>
            <div className="price">{product.price}</div>
            <div className="rating">{product.rating}</div>
        </li>
    )
}

export default ProductDetails