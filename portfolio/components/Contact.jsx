import React from "react";

function Contact()
{
    return(
        <>
        <div className="contact-container mt-3">
        <h1>Contact Me</h1>
        </div>
        <div className="container contact-info pt-2 pb-3">
            

        <div className="contact-direct mt-3">
             <p>Danial Ahmad</p>
             

       </div>
<div className="form-container">
    <form action="
    ">
        <input type="text" placeholder="Your Name"className="form-control mb-2"/>
        <input type="email" placeholder="Your Email" className="form-control mb-2"/>
        <input type="text" placeholder="Subject" className="form-control mb-2" />
        <textarea name="" id="" cols="30" rows="10" 
        className= 'form-control mb-2' placeholder="Message"></textarea>
        <button className="btn btn-success">Send Message</button>

    </form>

</div>

        </div>
      
        </>
    )
}
export {Contact}