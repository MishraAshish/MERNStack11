//container of shopping cart application
import React, { Component, PureComponent } from "react"; //React - is default import and Component - is Named import
import TestComponent from "./TestComponent";

//export default class Home extends Component {

//Pure component will check each and every state and props before rendering
export default class Home extends PureComponent {
    constructor(props, context){
        super(props);

        this.state = {
            Title : "This is initial title",
            NumberNew : 25,
            Description : "Default Description",
            AddressValue : "Default Address",
            SessionValue : "Default Session"
        }

        this.intervalValue = 1; //normal variable not part of V-dom
        //initilize the state, view is not accessible
        console.log("constructor");

        //ref - keyword uses
        //for creating and accessing html out of react flow
        //as we dont have any html selectors available in react so this provides a reference to html
        this.inputAddress = React.createRef(); 
        this.inputSession = React.createRef();
        //this.inputAddress.current.focus(); //view can't be accessed in constructor
        //this.inputAddress.current.value = "This value is setup in ctr"
    }

    // intervalUpdate = setInterval(() => {
    //         this.intervalValue ++;
    //         console.log(this.intervalValue)
    //     }, 1000);
    

    //creation life cycle method
    componentDidMount(){
        console.log("componentDidMount - view is ready, server calls can be made, state change can also be done")        
        //view is accessible
        // setTimeout(() => {
        //     this.inputAddress.current.focus();
        //     this.inputAddress.current.value = "New value after three seconds";
        // },3000)        
    }
    
    //destruction life cycle method
    componentWillUnmount(){
       console.log("Home component unmount");
       //clear all the subscriptions, any interval calls or any async update to state must be cleared
       //clearInterval(this.intervalUpdate); 
    }
    

    //update life cycle methods
    //this asks us to decide whether we need to stop calling the render method on state change
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("shouldComponentUpdate");
    //     console.log("nextState",nextState);
    //     console.log("nextProps", nextProps);
        
    //     //return true;
    //     if (nextState.Title == this.state.Title) {
    //         return false; //to not call the render method
    //     } else {
    //         return true;    
    //     }
    // }


    getSnapshotBeforeUpdate(prevState, prevProps){
        console.log("getSnapshotBeforeUpdate");
        console.log("prevState", prevState);
        console.log("prevProps", prevProps);
        return {
            prevState,
            prevProps
        }
    }

    componentDidUpdate(prevState, prevProps){
        console.log("componentDidUpdate");
        console.log("prevState",prevState);
        console.log("prevProps", prevProps);
    }


    changeName = ()=>{
        console.log(this.state.Title)
        this.setState({
            Title : "Updated Title on click!!"
            //Title : "Updated Title on click!!" + this.intervalValue,
            //NumberNew : this.state.NumberNew + 1
        })

        // this.state.Title = "New Title";
        // this.forceUpdate();//forcefully calls the render method, should be avoided
    }

    //Defined in parent Component but will be executed by childComponent
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

    //to handle the form submission in uncontrolled react component
    handleSubmit = ( evt )=>{ //evt - an object provided by js to check the currently invoked html
        
        let session = this.inputSession.current.value;
        let addr = this.inputAddress.current.value;
        
        alert(`Form Submitted!!! ${session} ${addr}`);

        this.setState({
            AddressValue : addr,
            SessionValue : session
        })

        //to stop the default behaviour of html elements
        evt.preventDefault();
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
                <h1>{ this.props.title }</h1>
                <div><b>{User.name}</b></div>
                
                <h2>{this.state.Title}</h2>

                <button onClick={this.changeName}>Click To change Title</button>
                
                {/* <input type={"text"} ref={this.inputAddress} ></input> */}

                {/* <TestComponent newNumber={this.state.NumberNew} /> */}
                <TestComponent newNumber={this.state.NumberNew} changeNameChild={this.changeNameFromChild} >

                    <h4>First Child HTML Passed from Parent</h4>
                    <h5>Second Child HTML passed from Parent</h5>
                
                </TestComponent>

                {/* controllled component */}
                <input type={"text"} value={this.state.Description} onChange={this.changeDesc}></input>


                      {/* We are going to create an uncontrolled html form with html elements, 
        it is controlled element values are not going to be part of react state */}
            <div>
                 <form onSubmit={this.handleSubmit} action="action/submitUser">
                     <label>
                             Session Name:
                             <input type="text" ref={this.inputSession} placeholder="Please enter session"/>
                     </label>                    
                     <label>
                             Address:
                             <input type="text" ref={this.inputAddress} placeholder="Please enter address"/>
                     </label>

                     <input type="submit" value="Submit" />

                     <div>
                             Session: {this.state.SessionValue}
                             <br/>
                             New Address: {this.state.AddressValue}
                     </div>
                 </form>
             </div>
            </>            
        )        
    }

}