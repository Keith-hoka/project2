import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Login from "./Login";
import SignUp from "./SignUp";
import Orders from "./Orders";
import Chat from "./Chat";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ProductForm from "./ProductForm";

const promise = loadStripe("pk_test_51JnFoXFPWQ7X0DS9OqekhyT3fo3Fj3ATaZlLHk9xLM6aakj8WPlKt7AIf1sLxqexnYAL8fZ4ppVSa2dxUJcjoWMm00xasskY2f");

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser){
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    });

    return () => { unsubscribe() };
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/create-product">
            <Header />
            <ProductForm />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              {!user ? <Login /> : <Payment />}
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/chat">
            <Header />
            {!user ? <Login /> : <Chat />}
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
