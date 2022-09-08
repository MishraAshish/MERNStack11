//console.log("Entry point of shopping cart application");
import React from "react";
//import { render } from "react-dom"; //old way 
import * as ReactDOM from 'react-dom/client';

import AppComponent from "./app/app";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent></AppComponent>); //bootstrapping of react application in index.html root element