import React, { createContext, useState } from 'react';
import { v1 as uuid} from 'uuid';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([
        // Dummy Data
        {title: 'bike', price: 5, rating: 2, image: 'imageURL1'},
        {title: 'bike2', price: 57, rating: 5, image: 'imageURL2'},
        {title: 'bike3', price: 52, rating: 1, image: 'imageURL3'}
    ])

    const createProduct = (title, price, rating, image) => {
        setProducts([...products, {title, price, rating, image, id: uuid()}])
    }

    const removeProduct = (id) => {
        setProducts([products.filter(product => product.id !== id)])
    }
    return (
        <ProductContext.Provider value={{products, createProduct, removeProduct}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;