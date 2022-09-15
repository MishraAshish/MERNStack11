//reducer is a function that contains logic to generate new state using actionType and payload
//no surprises just simple calculation

import * as ActionTypes from "../actionTypes";

let INITIAL_STATE = {
    user : {
        userName : "Dummy User",
        password : "",
        street : "Some Street on Earth",
        mobile : "98989898889",
        _id: ""
    }
}

//reducer function accepts a state and an action with action type and payload, the default state is initialstate
let UserReducer = (previousState = INITIAL_STATE, action) => {

    switch (action.type) {   //signinuser

        case ActionTypes.addUserToStore :
            console.log("Adduser To Store Reducer", action)
            //we will create a new state using payload passed from user component and container
            //for every action dispatch reducer generates a new state
            //let newState = Object.assign(previousState);
            //newState.user = action.payload.user;

            //...prevState = {xState, user, prod} // replacing user with action.payload.user
            //best use of spread operator to preserve the immutability
           
            return {...previousState, user : action.payload.user} //returning the new state immutability

        default:
            return previousState;
    }

}

export default UserReducer;
