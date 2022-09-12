//we'll create header as a functional component
import React from "react";
import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";


let Header = (props)=>{

    let navigate = useNavigate();

    let func = function(event) {
        event.preventDefault();
        
        navigate('/about/5000');
    }

    
    return(
        <>
            Hi, Welcome to SynergisticIT Shopping Cart 
            <div>
                <NavLink to="/home" className="button" activeclassname="success" >Home </NavLink> 
                <NavLink to="/about" className="button" activeclassname="success" >About </NavLink> 

                <button onClick={func}>Go To About</button>
            </div>
        </>
    )

}

// Header.defaultProps = {
//     newNumber : 1,
//     title : "Header Default Component"
// }

Header.propTypes = {
    newNumber : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired
}

export default Header;