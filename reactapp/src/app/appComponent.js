//container of shopping cart application
import React, { Component } from "react"; //React - is default import and Component - is Named import
import Header from "./Common/HeaderComponent";


export default class AppComponent extends Component {

    constructor(props, context){
        super(props);

        this.state = {
            Title : "This is initial title"
        }
    }

    changeName = ()=>{
        console.log("Test")
        this.setState({
            Title : "Updated Title on click!!"
        })
    }

    //render method is used to create virtual dom using jsx
    render(){
        console.log("Appcomponent Rendered!!!")
        let User = {
            name : "MERNStack WebPack 6"
        }
        //we'll write our html + js in JSX (javascript as xml) format as below
        //it must return only one parent //it is also termed as virtual DOM
        return(
            <>
                <h1>This is Application Component</h1>
                <div><b>{User.name}</b></div>
                
                {/* <h2>{this.state.Title}</h2> */}

                <button onClick={this.changeName}>Click To change Title</button>
                
                <Header title={this.state.Title}>
                    <h4>First Name</h4>
                    <h5>Last Name</h5>
                </Header>

                <input type={"text"} value="Enter Name"></input>
            </>            
        )        
    }

}