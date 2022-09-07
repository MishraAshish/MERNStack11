//we'll create header as a functional component
import React from "react";

let Header = (props)=>{
    let fNumber = 5, secondNumber = 8;
    return(
        <>
            <h1>This is the functional header component {props.title}</h1>
            {props.children[0]}
            {props.children[1]}
            {fNumber*secondNumber}
            {fNumber+secondNumber}
            {fNumber-secondNumber}
        </>
    )

}

export default Header;