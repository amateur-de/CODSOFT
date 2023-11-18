import React from "react";
function Footer()
{
    return(
        <div className="footer">
               <span>GoAnywhere</span>
               <ul>
                <li>Discount offers</li>
                <li>Special Deals</li>
                <li>Tour packages</li>
               </ul>
               <ul>
                <li>About Us</li>
                <li>FAQ</li>
                <li>Terms and Conditions</li>
               </ul>
               <p>Follow us on
                <br />
               <a href=""><img className="footer-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" /></a>
               <a href=""><img className="footer-logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" /></a>
               </p>
        </div>
    )
}

export {Footer}