import React from "react";

function Projects()
{

    return(
        <>
        <div className="container mt-3">
        <h2 className="text-center">My Recent Projects</h2>
        </div>
        <div className="container card-container row  flex-row justify-content-center mt-3">
        <div className="card col-6 border-0" style={{width: '18rem'}}>
         <img src= {`../src/assets/landing.png`} className="card-img-top" alt="..." />
         <div className="card-body">
         <h5 class="card-title">Landing Page</h5>
          <p className="card-text">A Landing page for a hypothetical touring company.</p>
        </div>
      </div>
      <div className="card col-6 border-0" style={{width: '18rem'}}>
         <img src= {`../src/assets/calculator.png`} className="card-img-top" alt="..." />
         <div className="card-body">
         <h5 class="card-title">Calculator</h5>
          <p className="card-text">A basic calculator for performing addition , subtraction , multiplication
          and division.</p>
        </div>
      </div>
            

        </div>
        </>
    )
}
export {Projects}