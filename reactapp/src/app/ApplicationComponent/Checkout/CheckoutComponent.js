import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import {NavLink,useNavigate} from "react-router-dom";

import Cart from "../Cart/CartComponent";

let Checkout = ()=>{
    let user = useSelector((state)=>state.userReducer.user)

    const [checkout, makePayment] = useState(true); //initialization of state through react hook useState passing in parameter
   
    const makePaymentClick = () => {
        makePayment(!checkout); //it will work as this.setState and propagate change to the react rendering engine eventually reflect the same
    }

    let navigate = useNavigate();
    let func = function(event) {      
        
        navigate('/cart');
        event.preventDefault();
    }

    return(
        <>
            {checkout ? 
            <Fragment>
                <h1>Checkout Component</h1>
                <div>
                        Hi, <b>{user.userName}</b> 
                        <br/><p>
                        Your Items are checked out and will be delivered at below address.
                        <br/>
                        If it looks good then please proceed for payment.</p>
                        <hr/>
                        Mobile: <b>{user.mobile}</b>
                        <br/>
                        Adress: <b>{user.street}</b>
                        <hr />
                </div>
                <Cart readOnly={true} />
                <div>
                    <button onClick={func} >
                        Go Back To Cart
                    </button>
                    <button onClick={makePaymentClick} >
                        Make Payment
                    </button>
                </div>
            </Fragment> : 
            <Fragment>
            <h1>Payment Page</h1>
            <div>
                Thankyou for the payment, your items under process!
                <hr />
                {/* <p>Coming from useState {user.name +" "+user.age}</p> */}
            </div>
            <div>
                <button onClick={func} >
                    Go Back To Cart
                </button>
                <button onClick={makePaymentClick} >
                    Go To Checkout
                </button>
            </div>
        </Fragment>
            }
        </>
    )
}

export default Checkout;