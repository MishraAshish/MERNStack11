//we'll create header as a functional component
import React from "react";
import PropTypes from "prop-types";

let TestComponent = (props)=>{
    //let fNumber = 5, secondNumber = 8;
    //props.newNumber = 100;


    return(
        <>
            {props.newNumber}
            <h1>Test Component From Home Data To Test {props.title}</h1>
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

// TestComponent.defaultProps = {
//     newNumber : 1,
//     title : "Header Default Component"
// }

TestComponent.propTypes = {
    newNumber : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired
}

export default TestComponent;