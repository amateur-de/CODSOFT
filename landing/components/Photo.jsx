import React from "react";
function Photo(props)
{
    return(
        <div className="photo">
        <img src= {`../src/assets/${props.image}.jpg`} alt="" />
        <h3>{props.name}</h3>
        <a href="" className="btn btn-primary">View Details</a>
        </div>
    )
}

export {Photo}