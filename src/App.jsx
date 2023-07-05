import React, { useState } from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Header from "./Components/Layout/Header";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import CartProider from "./Context/CartProvider";
function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = (e) => {
    e.preventDefault();
    setCartIsShow(false);
  };
  return (
    <CartProider>
      
      {cartIsShow && <Cart  OnClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <Hero />
      <Products />
    </CartProider>
  );
}

export default App;
