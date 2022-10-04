//container of shopping cart application
import React, { Component } from "react"; //React - is default import and Component - is Named import
import Header from "./Common/HeaderComponent";
import {BrowserRouter as Router, Routes, Redirect, Route} from "react-router-dom";// browser router from react
import "./app.css";
import FooterComponent from "./Common/FooterComponent";
import Home from "./Common/HomeComponent";
import About from "./Common/AboutComponent";
import NotFound from "./Common/NotFoundComponent";
// import User from "./ApplicationComponent/User/Component/UserComponent";
//import User from "./ApplicationComponent/User/Container/UserContainer";
import User from "./ApplicationComponent/User/Component/UserHook";
import Product from "./ApplicationComponent/Product/ProductComponent";
import Display from "./ApplicationComponent/Product/DisplayProducts";
import Cart from "./ApplicationComponent/Cart/CartComponent";
import Checkout from "./ApplicationComponent/Checkout/CheckoutComponent"; 

export default class AppComponent extends Component {

    //render method is used to create virtual dom using jsx
    render(){
        //we'll write our html + js in JSX (javascript as xml) format as below
        //it must return only one parent //it is also termed as virtual DOM
        return(
            <Router>
                <Header />
                    {/* Here we'll use switch based conditions to render one component at a time */}
                    <Routes>

                        <Route path="/" element={<Home  title="Home Component" />} />
                        <Route path="/home" element={<Home  title="Home Component" />} />
                        <Route path="/user" element={<User />} />
                        <Route path="/product" element={<Product />} /> 
                        <Route path="/display" element={<Display />} /> 
                        <Route path="/cart" element={<Cart />} /> 
                        <Route path="/checkout" element={<Checkout />} /> 
                        <Route path="/about" element={<About />} />
                        <Route path="/about/:id" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                <FooterComponent />
            </Router>
        )        
    }

}