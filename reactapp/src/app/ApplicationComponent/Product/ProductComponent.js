import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { saveProduct } from "../../State/Product/ProductAction";
import DisplayProducts from "./DisplayProducts";

let ProductComponent = (props) => {
    
    let defaultProd = useSelector((state)=>state.productReducer.defaultProduct)//mapStateToProps, making subsriber
    //console.log(defaultProd)
    //creating states for product component by using default value
    let [name, setName] = useState(defaultProd.name);
    let [price, setPrice] = useState(defaultProd.price);
    let [desc, setDescription] = useState(defaultProd.desc);
    let [rating, setRating] = useState(defaultProd.rating);

    let dispatchToSave = useDispatch();//mapDispatchToProps, making it publisher

    // let onTextChange = (evt)=>{
    //     let classs = evt.target.classList;
    //     if (classs.contains("name")) {
    //         setName(evt.target.value)
    //     }
    // }

    let saveProductClick = (evt)=>{
        let productToBeSaved = {name, price, desc, rating} ;//this makes a product object

        alert("Save Product will be implemented here!! "+ JSON.stringify(productToBeSaved));
        
        dispatchToSave(saveProduct(productToBeSaved))
        evt.preventDefault();
    }

    return(
        <>
            <h1>Product component</h1>

            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Product Name</b>
                        <input type="text" className="form-control col-md-6" value={name} maxLength={25}
                            onChange={(evt)=>setName(evt.target.value)}
                        />
                    </div>
                    <div className="col-md-12">
                        <b>Price </b>
                        <input type="number" className="form-control col-md-6" value={price} 
                          placeholder="Product Price"
                          onChange={(evt)=>setPrice(evt.target.value)} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Description </b>
                    <input type="text" className="form-control col-md-6" value={desc} 
                          placeholder="Please Describe the product"
                          onChange={(evt)=>setDescription(evt.target.value)} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Ratings </b>
                    <input type="text" className="form-control col-md-6" value={rating} 
                          placeholder="Ratings"
                          onChange={(evt)=>setRating(evt.target.value)} />
                    </div>

                    <input type="button" className={"form-control btn btn-primary col-md-3"} 
                        value={"Save Product"} 
                        onClick={saveProductClick}/>
                </div>
            </section>
            <hr/>
            <DisplayProducts />
        </>
    )
}

export default ProductComponent;