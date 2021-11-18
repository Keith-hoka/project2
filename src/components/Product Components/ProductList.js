import React, {useContext} from 'react';
import { ProductContext } from '../Context/ProductContext';
import ProductDetails from './ProductDetails';


const ProductList = () => {
    const { products } = useContext(ProductContext);

    return products.length ? (
        <div>
            {products.map(product => {
                return (<ProductDetails product={product} key = {product.id} />)
            })}
        </div>
    ) :
    (
        <div className='empty'>Sorry, there are no items current in stock</div>
    )
}

export default ProductList