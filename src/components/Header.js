import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { useStateValue } from "./StateProvider";
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

      <div className="header-search">
        <input className="header-searchInput" />
        <SearchIcon className="header-searchIcon" />
      </div>

      <div className="header-nav">
        <Link to={!user && "/login"} className="header-link">
          <div onClick={handleLogin} className="header-option">
            <span className="header-option-line1">Hello {user ? user.email : "Guest"}</span>
            <span className="header-option-line2">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-option-line1">Returns</span>
            <span className="header-option-line2">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-option-line1">Your</span>
            <span className="header-option-line2">Prime</span>
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
