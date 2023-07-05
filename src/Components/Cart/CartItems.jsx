import React, { useContext } from "react";
import "../Cart/CartItems.css";
import { CartContext } from "../../Context/CartProvider";

const CartItems = ({products}) => {
    const {img, name, price, amount} =products
    const {removeItem} =useContext(CartContext)
  return (
    <li className="cart-item">
      <div className="cart-item-img">
        <img src={img} alt={name} width={70}  />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-texts">
          <b>{products.name}</b>
          
          <div>
            
            <span>₺{price} x</span>
            <span>{amount}</span>
          </div>
        </div>
        <a href="" className="cart-item-remove" onClick={(e)=>{
          e.preventDefault()
          removeItem(products.id)
        }}>x</a>
      </div>
    </li>
  );
};

export default CartItems;
