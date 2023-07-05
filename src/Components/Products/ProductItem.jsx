import React, { useContext } from "react";
import { CartContext } from "../../Context/CartProvider";
import "../Products/ProductItem.css"
import Rating from "./Rating";
import Card from "../UI/Card";


const ProductItem = ({ product }) => {
  const { name, description, img , price , } = product;
 const {addItem, items }=useContext(CartContext)
 console.log(items)
 return (
    <Card>
      <img src={img} alt={name} />
<h3 className="product-title">{name}</h3>
<p>{description}</p>
<div className="product-info">
  <span><Rating/></span>
  <span className="price">{price}₺</span>
</div>
<button className="add-to-cart" onClick={()=>addItem(product)}>Sepete Ekle </button>
    </Card>
  );
};
export default ProductItem;
