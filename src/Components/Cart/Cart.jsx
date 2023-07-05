import React, { useContext,  } from "react";
import { CartContext } from "../../Context/CartProvider";
import "./Cart.css";
import CartItems from "./CartItems";
import OutsideClickHandler from "react-outside-click-handler";
import OffCanvas from "../UI/OffCanvas";


const Cart = (props) => {
  
const handleItemClick = props.OnClose


  const {items, totalAmount, clearItem} =useContext(CartContext)
  const cartItems = (
    <ul className="cart-items">
      {items.map((products) => (
        <CartItems key={products.id} products={products} />
      ))}
    </ul>





  );

  

  return (
    <OutsideClickHandler onOutsideClick={handleItemClick}>
      <OffCanvas onClick={handleItemClick}>
        <div className="cart-head">
          <h2>sepetim</h2>
          <a
            style={{ textDecoration: "none", color: "red", fontSize: "1.5rem" }}
            href="/"
            onClick={handleItemClick}
          >
            X
          </a>
        </div>

        {cartItems}

        <div className="total">
          <span>Toplam Deger</span>
          <span>{totalAmount}₺</span>
        </div>
        <div className="actions">
          <button className="cart-order">Siapris Ver</button>
          <button className="cart-clear" onClick={clearItem}>Temizle</button>
        </div>
      </OffCanvas>
      </OutsideClickHandler>
  );
};

export default Cart;
