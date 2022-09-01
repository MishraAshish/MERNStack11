//container of shopping cart application
import React, { Component } from "react"; //React - is default import and Component - is Named import

export default class AppComponent extends Component {

    render(){
        let User = {
            name : "Smart Student"
        }
        //we'll write our html + js in JSX (javascript as xml) format as below
        //it must return only one parent
        return(
            <>
                <h1>This is Application Component</h1>
                <div><b>{User.name}</b></div>
                <h1>This will hold our Shopping Cart Application</h1>
            </>            
        )        
    }

}