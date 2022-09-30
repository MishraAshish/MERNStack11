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

    
    return(
        <>
            Hi, <b>{props.user && props.user.userName ? props.user.userName : "Tom"}</b> Welcome to SynergisticIT Shopping Cart 
            <div>
                <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink> 
                <NavLink to="/user" className="button" activeclassname="success" >User </NavLink> 
                <NavLink to="/product" className="button" activeclassname="success" >Product </NavLink> 
                <NavLink to="/cart" className="button" activeclassname="success" >Cart </NavLink> 
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