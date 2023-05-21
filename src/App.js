import { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandler() {
    setCartIsShown(true);
  }
  function hideCartHandler() {
    setCartIsShown(false);
  }

  return (
    <Fragment>
      {cartIsShown ? <Cart hideCartHandler={hideCartHandler} /> : null}
      <Header showCartHandler={showCartHandler} />
      <Meals />
    </Fragment>
  );
}

export default App;
