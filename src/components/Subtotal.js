import React from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";

import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";

function Subtotal() {
  const [{ cart }] = useStateValue();
  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
       />
      <button onClick={()=> history.push("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
