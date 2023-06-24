import React from "react";

function Demo(props){

    console.log("Demo running");
    
    return(
        <p>{props.show ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" : ''}</p>
    )
};

export default React.memo(Demo);