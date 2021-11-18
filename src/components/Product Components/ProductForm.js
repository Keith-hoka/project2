import React, { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import { db } from "../firebase";

const NewProductForm = () => {
    const {createProduct} = useContext(ProductContext);
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(title, image, price, rating)
        const newProduct = {
            title: title,
            image: image,
            price: price,
            rating: rating
        }
        
        console.log(title);
        console.log(image);
        console.log(price);
        console.log(rating);

        db.collection('products')
        .add(newProduct)
        .then((doc) => {
            console.log(`Product ${doc.id} has been created successfully`)
        })
        .catch((err) => {
            console.log("Error has occurred")
            console.error(err);
        })

        // Refresh for the next time
        setTitle('');
        setImage('');
        setPrice('');
        setRating('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Product Name' value={title}
            onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder='Image URL' value={image}
            onChange={(e) => setImage(e.target.value)} required />
            <input type="number" placeholder='Price' value={price}
            onChange={(e) => setPrice(e.target.value)} required />
            <input type="number" placeholder='Rating' value={rating}
            onChange={(e) => setRating(e.target.value)} required />
            <input type="submit" value="add product" />
        </form>
    )
}

export default NewProductForm