import React from "react";

import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import "./Checkout.css";

function Checkout() {
  const [{ cart, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ad" src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg" alt="" />

        {cart?.length === 0 ? (
          <div>
          <h2>Your Shopping Cart is currently empty.</h2>
            <p>You have no items in your cart. To buy one or "Add to Cart" next to the item.</p>
          </div>
        ):(
          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout-title">Your Shopping Cart</h2>
            {cart.map(item => (<CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />))}
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="checkout-right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
