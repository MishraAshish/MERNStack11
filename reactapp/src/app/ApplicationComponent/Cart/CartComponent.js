import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartItemComponent from "./CartItemComponent";
import CartSummaryComponent from "./CartSummaryComponent";

import { saveCartToDb } from "../../State/Cart/CartAction";


let CartComponent = (props)=>{

    let cartList = useSelector((state)=>state.cartReducer);
    console.log("cartList ", cartList);

    let User = useSelector((state)=>state.userReducer.user);

    let recalculate = (cartItems)=>{
        let amount = 0, 
            count = 0;
    
        for(let item of cartItems) {
            amount += item.qty * item.price;
            count  += item.qty; 
        }
    
        return {
            amount, //ES6 syntactic sugar amount: amount 
            count // if key and values are same name then we can put it this way without ":"
        }
    }

    let navigate = useNavigate();
    let func = function(event) {      
        
        navigate('/checkout');
        event.preventDefault();
    }

    let dispatchToSaveCart = useDispatch();
    let clickToSaveCart = (cart, userid)=>{
        if (!userid) {
            alert("Please login to save the cart!!!");
            navigate('/user');
        } else {
            dispatchToSaveCart(saveCartToDb(cart, userid))    
        }
        
    }

    return(
        <>
            <h1>Cart Component</h1>
            {cartList && cartList.length > 0 ? 
                <Fragment>
                <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Rating</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                {
                                    props.readOnly ?  "" : 
                                        <Fragment>
                                            <th>Remove</th>
                                            <th>Edit</th>
                                        </Fragment>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartList.map(item=>{
                                    //return item.name
                                    
                                    return <CartItemComponent 
                                                    item={item}
                                                    key={item._id}
                                                    readOnly = {props.readOnly}
                                        />
                                })
                            } 
                        </tbody>
                    </table>

                    <CartSummaryComponent data={recalculate(cartList)}/>
                    {
                        props.readOnly ? "" : 
                            <Fragment>
                                <button onClick={() => clickToSaveCart(cartList, User._id)} >
                                        Save Cart
                                </button>
                                
                                <button onClick={func} >
                                    Go To Checkout
                                </button>
                            </Fragment> 
                    }
                </Fragment>
                : 
                <b>Cart Is Empty!!! Please add some products.</b>
            }

        </>
    )
}

export default CartComponent;