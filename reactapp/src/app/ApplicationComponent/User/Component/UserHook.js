//Class and Functional Component - State with Class but Functional was not, it became static

import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";//inplace of connect and mapStateToProps or mapDispatchToProps we have these
import { signInSignUpUser } from "../../../State/User/UserAction";

 

let UserHook = (props)=>{

    //by using useRef we can create reference for html elements to be updated without adding state change
    //let refInput = react.createRef()
    // creating inputs with the help of ref keyword with userRef function
    let inputUserName = useRef(null);
    let inputPassword = useRef(null);
    let inputMobile = useRef(null);
    let inputStreet = useRef(null);
    
    //useSelector allows to subscribe from store (here reading user data)
    let user = useSelector((state)=>state.userReducer.user);//replaces the mapStateToProps

    // we can't do it as rendering is not done yet so no access to html element
    //inputUserName.current.value = user.userName;

    //this hook will be used to dispatch the action (signinupuser)
    let dispatchToSignIn = useDispatch(); //in place of mapDispatchToProps

    //useeffect is the hook that we use to make it work as componentDidMount, componentWillUnmount
    useEffect(()=>{
        //code to initialize any server call or data-set
        inputUserName.current.value = user.userName;
        inputPassword.current.value = user.password;
        inputStreet.current.value = user.street;
        inputMobile.current.value = user.mobile;

        // return ()=>{ //this we'll do to make it work like component will unmount
        //     //doing clearInterval, unsubscribe to any post request etc
        // }
    })

    let readFormData = (evt)=>{
        // `current` points to the mounted text input element
        let userObj = {
            userName : inputUserName.current.value,
            password : inputPassword.current.value,
            street : inputStreet.current.value,
            mobile : inputMobile.current.value
        }
        //alert("User To Sign In :" + JSON.stringify(userObj))
        
        dispatchToSignIn(signInSignUpUser(userObj));

        evt.preventDefault();
    }

    return(
        <>
            <h1>User Component</h1>

            <form className={"form col-md-10 userHook"} onSubmit={readFormData}>                
                <label>
                    <b>User Name :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputUserName} 
                        placeholder="Please enter user name" maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Password :</b>
                    <input type="password" className={"form-control col-md-12"} ref={inputPassword} 
                            placeholder="Please enter password" maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Street :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputStreet} 
                            placeholder="Please enter address" maxLength={20}/>
                </label>
                <br/>
                <label>
                    <b>Mobile :</b>
                    <input type="number" className={"form-control col-md-12"} ref={inputMobile} 
                            placeholder="Please enter mobile" />
                </label>                

                <br/>
                <input type="submit" className={"btn btn-primary"} value="Signin" />
            </form>
        </>
    )

}

export default UserHook;