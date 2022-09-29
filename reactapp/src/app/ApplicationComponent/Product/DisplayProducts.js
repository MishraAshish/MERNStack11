import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../../State/Product/ProductAction";
import DisplayDetailedProduct from "./DisplayDetailedProduct";

let DisplayProducts = (props)=>{
    
    let productList = useSelector((state)=>state.productReducer.products);
    let dispatchToFetch = useDispatch();

    //useEffect is used as componentDidMount hook
    useEffect(()=>{ dispatchToFetch(fetchProducts()) },[])
    console.log("productList ", productList)


    return(
        <>
            <h2>Below are products we can add to cart!!</h2>
            <div>
                {productList && productList.length>0 ?
                    productList.map(product=>{
                        //return JSON.stringify(product)
                        return <DisplayDetailedProduct product={product} key={product._id}/>
                    }):
                    "No Product Found!!"
                }
            </div>
        </>
    )

}

export default DisplayProducts;