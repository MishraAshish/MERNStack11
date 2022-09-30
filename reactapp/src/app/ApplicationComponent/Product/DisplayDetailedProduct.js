import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../State/Cart/CartAction";

let DisplayDetailedProduct = ({product})=>{

    let [showHide, toggleShowHide] = useState(false)

    let dispatchToAddProduct = useDispatch();

    let cartList = useSelector((state)=>state.cartReducer);

    let addProductToCart = ( product )=>{
        dispatchToAddProduct(addItemToCart(product))
    }
  
    return(
        <ul className="product">
            <li className="product" onClick={(evt)=>{toggleShowHide(!showHide); evt.preventDefault()}} >
            {product.name}
                {showHide ? 
                    <ul>
                    <li>{product.price}</li>
                    <li>{product.desc}</li>
                    <li>{product.rating}</li> 
                    <button onClick={()=>{addProductToCart(product)}}>Add To Cart</button>
                </ul>: " "}
            </li>
        </ul>
    )

}

export default DisplayDetailedProduct;