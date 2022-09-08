//creating functional component
import React from "react";

//default export
export default function FooterComponent(props) {
    return(
        <div className="footer">
        © Copyright 2019 All rights reserved. &nbsp;|&nbsp; <a href="https://www.synergisticit.com/" target="_blank">SynergisticIT</a> &nbsp;|&nbsp; <a href="http://www.synergisticit.com/sitemap.xml" target="_blank">Sitemap</a>
        {/* {`This is footer component. Received address through props is ${props.address} and Name is ${props.name}
        ${props.user.name}
        ${props.user.pwd}
        `}
        {props.children[0]}
        {props.children[1]} */}
        </div>
    )
}

//named export
export let DummyComponent = (props)=>{
    return(
        <>
            <h4><b>{`Dummy Component Rendered`}</b></h4>
        </>
    )
}

//named export pi
export const pi = 3.141;
