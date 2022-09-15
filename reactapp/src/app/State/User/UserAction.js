//this action file contains the actions and methods to make call to server
//import axios from "axios";
import * as ActionTypes from "../actionTypes";
import axios from "axios";

//import { getUserCart } from "../Cart/CartAction";

export const addUserToStoreAction = (user)=>
{
    return {
        type: ActionTypes.addUserToStore, //this action type would be matched in reducers once action is dispatched
        payload : {user}
    }
}


export const signInSignUpUser = (user)=>{

    // thunk - makes it behave synchronously
    return (dispatch, getState)=>{
        // here we go with ajax call : to save data to the server or fetch it from the server
        // using fetch method of react
        console.log("called by dispatch and synced by thunk");
        //dispatch(loading(true));
            axios.post("http://localhost:9000/user/api/signinup",//uri or end point of singninup api
                        user//passing user object to be read as req.body
                    )
                    .then((ServerData)=>{
                        let signdUser = ServerData.data;
                        alert(JSON.stringify(signdUser))
                        //sending user to the store
                        dispatch(addUserToStoreAction(signdUser));//dispatching action with signed user 
                        //dispatch(getUserCart(signedUser.data._id))
                    })
                    .catch((err)=>{
                        console.log("err in login ", err)
            })
    }
}
