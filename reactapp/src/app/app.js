//container of shopping cart application
import React, { Component } from "react"; //React - is default import and Component - is Named import
import Header from "./Common/HeaderComponent";
import "./app.css";
import FooterComponent , { DummyComponent } from "./Common/FooterComponent";

export default class AppComponent extends Component {

    constructor(props, context){
        super(props);

        this.state = {
            Title : "This is initial title",
            NumberNew : 25,
            Description : "Default Description"
        }
    }

    changeName = ()=>{
        console.log(this.state.Title)
        this.setState({
            Title : "Updated Title on click!!",
            NumberNew : this.state.NumberNew + 1
        })

        //this.state.Title = "New Title"
    }

    changeNameFromChild = (Name)=>{        
        this.setState({
            Title : Name            
        })
    }

    changeDesc = (evt)=>{
        console.log(evt.target.value)
        //this.state.Description = evt.target.value; // this will not do render so will not reflect

        //to reflect the change of state we need to change it through reserved API - setState, forceUpdate
        //goes with life cycle method of react
        //its a batch update process
        this.setState({
            Description : evt.target.value
        })

        //this method is used to call the render method forcefully by skipping lifecycle methods
        //it should be avoided
        //this.forceUpdate()
        console.log(this.state.Description)
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
                
                <h2>{this.state.Title}</h2>

                <button onClick={this.changeName}>Click To change Title</button>
                

                {/* <Header newNumber={this.state.NumberNew} /> */}
                <Header newNumber={this.state.NumberNew} changeNameChild={this.changeNameFromChild} >

                    <h4>First Child HTML Passed from Parent</h4>
                    <h5>Second Child HTML passed from Parent</h5>
                
                </Header>

                <input type={"text"} value={this.state.Description} onChange={this.changeDesc}></input>

                <FooterComponent />
                <DummyComponent/>
            </>            
        )        
    }

}