import React from "react";
import { Navbar } from "./Navbar";
function Landing()
{
    return (
    <div className="landing">
        <Navbar/>
        <div className="container text-white landing-text">
            <h2>Get a Special</h2>
            <p>Deal for your personal vacation</p>
            <button className="btn btn-success">View Current Deals</button>
        </div>
    
    </div>
    )
}

export {Landing}