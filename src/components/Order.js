import React from "react";
import moment from "moment";
import CurrencyFormat from "react-currency-format";

import CheckoutProduct from "./CheckoutProduct";
import "./Order.css";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>

      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>

      <p className="order-id"><small>{order.id}</small></p>

      {order.data.cart?.map(cartItem => (
        <CheckoutProduct
          key={cartItem.id}
          id={cartItem.id}
          title={cartItem.title}
          image={cartItem.image}
          price={cartItem.price}
          rating={cartItem.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (<h3 className="order-total">Total: {value}</h3>)}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
