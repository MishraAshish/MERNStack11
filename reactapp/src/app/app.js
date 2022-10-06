//container of shopping cart application
import React, { Component, lazy, Suspense } from "react"; //React - is default import and Component - is Named import
import {BrowserRouter as Router, Routes, Redirect, Route} from "react-router-dom";// browser router from react
import "./app.css";

let Header = lazy(()=> import("./Common/HeaderComponent"));
let Footer = lazy(()=> import("./Common/FooterComponent"));
let Home = lazy(()=> import("./Common/HomeComponent"));
let About = lazy(()=> import("./Common/AboutComponent"));
let NotFound = lazy(()=> import("./Common/NotFoundComponent"));
// import User from "./ApplicationComponent/User/Component/UserComponent";
//import User from "./ApplicationComponent/User/Container/UserContainer";
let User = lazy(()=> import("./ApplicationComponent/User/Component/UserHook"));
let Product = lazy(()=> import("./ApplicationComponent/Product/ProductComponent"));
let Display = lazy(()=> import("./ApplicationComponent/Product/DisplayProducts"));
let Cart = lazy(()=> import("./ApplicationComponent/Cart/CartComponent"));
let Checkout = lazy(()=> import("./ApplicationComponent/Checkout/CheckoutComponent")); 
let Coupon = lazy(()=> import("./ApplicationComponent/Coupon/CouponComponent")); 


export default class AppComponent extends Component {

    //render method is used to create virtual dom using jsx
    render(){
        //we'll write our html + js in JSX (javascript as xml) format as below
        //it must return only one parent //it is also termed as virtual DOM
        return(
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
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
                        <Route path="/coupon" element={<Coupon />} /> 
                        <Route path="/about" element={<About />} />
                        <Route path="/about/:id" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </Suspense>
            </Router>
        )        
    }

}