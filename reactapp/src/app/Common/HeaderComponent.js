//we'll create header as a functional component
import React from "react";
import PropTypes from "prop-types";

let Header = (props)=>{
    //let fNumber = 5, secondNumber = 8;
    //props.newNumber = 100;


    return(
        <>
            {props.newNumber}
            <h1>Header Data To Test {props.title}</h1>
            {props.children[0]}
            {props.children[1]}
            
            <h2></h2>
            <button onClick={()=>props.changeNameChild("New Title is updated from Child comp")}>Change Title From Child</button>

            {/* {fNumber*secondNumber} 
            {fNumber+secondNumber}
            {fNumber-secondNumber} */}
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