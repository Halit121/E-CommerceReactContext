import React from "react"
import products from "../../ProductData"
import '../Products/Products.css'
import ProductItem from "./ProductItem"

const Products = () => {

    const ProductList = products.map((product)=>(<ProductItem key={product.id} product={product}/>))
    
  return (
    <main className="products-wrapper">
        <ul className="products">
            {ProductList}
        </ul>
    </main>
  )
}

export default Products