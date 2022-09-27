//import reducers, create/configures store, import middle ware to make calls, combineReducer, export store
//only one store is allowed in one applicaiton, applications data model,
//one reducer per store so we need to combine if multilpe reducers are there
//store sends notification to view for change of state
//this allows to inject middlewares like thunk, promise in application 

import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk"; //is used to pipeline the dispatched objects and give us a feeling of sync execution by being async

import userReducer from "./User/UserReducer";
import productReducer from "./Product/ProductReducer";

//custom middleware function to log action raised
let logger = () => (next) => (action) => {
    //currying in javasript where we pass function as input and recieve function as output
    console.log("Logged Action : Store File ", action);
    next(action); //move to the actual execution
};

const rootReducer = combineReducers({
    userReducer, //userReducer : userReducer       
    productReducer,
});


//create configure and export the store from this code
export default configureStore(
        {reducer : rootReducer},
        {},//inital state if we want to set from store instead of reducer
        applyMiddleware(logger, thunk)
    )


// store is the data model/state management top level
// store will have collection of reducers

// define states - in the respective reducer file (User State =>  User Reducer)
// define updates in state - in the respective reducer file (User Actions to Updates =>  User Reducer)
// Actions raised from User Component => UserActions
// Action Types => this would be a common file
// Dispatchers => this we'll have once we subscribe the state or publish the action
// Action Creators => would be part of user action in UserComponents