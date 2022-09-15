//console.log("Entry point of shopping cart application");
import React from "react";
//import { render } from "react-dom"; //old way 
import * as ReactDOM from 'react-dom/client';

import { Provider } from "react-redux";// provider component will make sure that it wraps whole react appln and has store object in it
import store from "./app/State/store"; //store a collection of all states and reducers


import AppComponent from "./app/app";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(//Provider Ensures that store is available for each component that subscribes to store
            <Provider store={store}> 
                <AppComponent />
            </Provider>); //bootstrapping of react application in index.html root element

//this way whole application becomes child of Provider or store