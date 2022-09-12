import React, {Fragment, useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";


let About = (props)=>{
    let params = useParams();    
    let param = params["id"] ? params["id"]: "No Params"; 

    // let navigate = useNavigate();

    // let func = function(event) {
    //     event.preventDefault();
        
    //     navigate('/user');
    // }

    return(
        <div className="about" >  
            <h2>We promise to support .... </h2>  
            <p className="about-content">If you’re looking for a job—a great job—we can help  
                you get in the door at some incredible companies.  
                Need to hire good people? We know thousands.  
                Let us introduce you. No matter where you are,  
                we can help you get where you want to go in your career.  
            </p>  
            <p>id = {param}</p>
            <button className={"form-control btn btn-primary col-md-2"} 
                    >Go To User</button>
        </div>
    )
}

export default About;