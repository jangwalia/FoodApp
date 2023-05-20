import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import "./Header.css";
import headerImage from "../../assets/meals.jpeg";
function Header() {
  return (
    <Fragment>
      <header className="header">
        <h1>Create Meals</h1>
        <HeaderCartButton />
      </header>
      <div className="main-image">
        <img src={headerImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
}

export default Header;
