import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "./axios";

import CheckoutProduct from "./CheckoutProduct";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";
import "./Payment.css";

function Payment() {
  const history = useHistory();
  const [{ cart, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${Math.floor(getCartTotal(cart) * 100)}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [cart]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    }).then(({ paymentIntent }) => {
      db
        .collection("users")
        .doc(user?.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          cart: cart,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });

      setSucceeded(true);
      setError(null);
      setProcessing(false);

      dispatch({
        type: "EMPTY_CART",
      });

      history.replace("/orders");
    });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>Checkout (<Link to="/checkout">{cart.length} {(cart.length === 1)? "Item" : "Itmes"}</Link>)</h1>

        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>General Assembly</p>
            <p>Sydney, AU</p>
          </div>
        </div>

        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment-priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>Total: {value}</h3>
                  )}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>

        <div className="payment-section">
          <div className="payment-title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment-items">
            {cart.map((cartItem) => (
              <CheckoutProduct
                id={cartItem.id}
                title={cartItem.title}
                image={cartItem.image}
                price={cartItem.price}
                rating={cartItem.rating}
               />))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
