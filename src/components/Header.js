import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { useStateValue } from "./StateProvider";
import Location from "./Location";
import { auth } from "./firebase";
import "./Header.css";

function Header() {
  const [{ cart, user }] = useStateValue();

  const handleLogin = () => {
    if (user){
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img className="header-logo" src="../GAMAZON.gif" alt="" />
      </Link>

      <div className="header-location">
        <LocationOnIcon />
        <div className="header-option">
          <span className="header-option-line1">Deliver to</span>
          <span className="header-option-line2"><Location /></span>
        </div>
      </div>

      <div className="header-search">
        <input className="header-searchInput" />
        <SearchIcon className="header-searchIcon" />
      </div>

      <div className="header-nav">
        <Link to={!user && "/login"} className="header-link">
          <div onClick={handleLogin} className="header-option">
            <span className="header-option-line1">Hello {user ? (!user.displayName ? user.email : user.displayName) : "Guest"}</span>
            <span className="header-option-line2">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        <Link to="/orders" className="header-link">
          <div className="header-option">
            <span className="header-option-line1">Returns</span>
            <span className="header-option-line2">& Orders</span>
          </div>
        </Link>
        <Link to="/create-product" className="header-link">
          <div className="header-option">
            <span className="header-option-line1">Post Your</span>
            <span className="header-option-line2">Product</span>
          </div>
        </Link>
        <Link to="checkout" className="header-link">
          <div className="header-option-cart">
            <ShoppingCartIcon />
            <span className="header-option-line2 header-cart-count">{cart?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
