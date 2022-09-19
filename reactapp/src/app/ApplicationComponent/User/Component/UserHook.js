//Class and Functional Component - State with Class but Functional was not, it became static

import React, { useEffect, useState } from "react";


let UserHook = (props)=>{

    //to call render method we get changes in props, or use setState or forceupdate API's
    // this.state = { //create a state to define Virtual Dom
    //     session : "Some Session",
    //     address : "Some Place"
    // }
    // setState({session : "New Session"}) // provide an api to send message to react for re-rendering

    //by using useState we can create each state and get a callback to update that state when needed

    let [sessionName, setSession] = useState("Default Session");
    let [address, setAddress] = useState("Default Place");

    //change the userId

    // let [user, setUser] = useState({name: "", age: ""});
    // let OnChange = () => {
    //     //setUser({name : "new value", age : user.age})
    //     //setUser({name : user.name, age : newAge})
    // }

    let onTextChange = ( evt )=>{
        setSession(evt.target.value);

        evt.preventDefault();
    }

    //useeffect is the hook that we use to make it work as componentDidMount, componentWillUnmount
    useEffect(()=>{
        //code to initialize any server call or data-set

        return ()=>{ //this we'll do to make it work like component will unmount
            //doing clearInterval, unsubscribe to any post request etc
        }
    })


    return(
        <>
            <form>
                <label>
                        Session Name:
                        <input type="text" placeholder="Please enter session" value={sessionName} 
                                onChange={onTextChange}/>
                </label>                    
                <label>
                        Address:
                        <input type="text"  placeholder="Please enter address" value={address}
                            onChange={(evt)=>setAddress(evt.target.value)}/>
                </label>

                <input type="submit" value="Submit" />

                {/* <div>
                        Session: {this.state.SessionValue}
                        <br/>
                        New Address: {this.state.AddressValue}
                </div> */}
            </form>
        </>
    )

}

export default UserHook;