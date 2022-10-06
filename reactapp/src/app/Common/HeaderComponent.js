//we'll create header as a functional component
import React from "react";
import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

let Header = (props)=>{

    let navigate = useNavigate();

    let func = function(event) {
        event.preventDefault();
        
        navigate('/about/5000');
    }

    let userName = props.user && props.user.userName ? props.user.userName : ""; 

    return(
        <>
            Hi <b>{userName +", "}</b> Welcome to SynergisticIT Shopping Cart 
            {userName == "" ?<b> Please Login to see other features</b>:""}
            <div>
            <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink> 
            <NavLink to="/user" className="button" activeclassname="success" >{userName == "" ? "Login" : "User"} </NavLink> 
            {userName &&
                <React.Fragment> 
                <NavLink to="/product" className="button" activeclassname="success" >Product </NavLink> 
                <NavLink to="/cart" className="button" activeclassname="success" >Cart </NavLink>
                <NavLink to="/checkout" className="button" activeclassname="success" >Checkout </NavLink>
                <NavLink to="/coupon" className="button" activeclassname="success" >Coupon </NavLink>
                    {/* <Dropdown as={ButtonGroup}>
                        <Button variant="success">Split Button</Button>
                        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                        <Dropdown.Menu>
                            <Dropdown.Item href="/about">About</Dropdown.Item>
                            <Dropdown.Item href="/product">Product</Dropdown.Item>
                            <Dropdown.Item href="/checkout">Checkout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> */}
                </React.Fragment>
            }
            {/* <button onClick={func}>Go To About</button> */}
            <NavLink to="/about" className="button" activeclassname="success" >About </NavLink>
            {/* <button onClick={func}>Go To About</button> */}
            </div>
        </>
    )

}

// Header.defaultProps = {
//     newNumber : 1,
//     title : "Header Default Component"
// }

// Header.propTypes = {
//     newNumber : PropTypes.number.isRequired,
//     title : PropTypes.string.isRequired
// }


//subsrcibing to store for user information
let mapStateToProps = (state)=>{
    return {
        user : state.userReducer.user
    }
}

export default connect(mapStateToProps, null)(Header);