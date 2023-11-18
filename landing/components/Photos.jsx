import React from "react";
import { Photo } from "./Photo";
function Photos()
{
    return(
        <div className="photo-grid">
        <Photo image = 'london'  name = 'London' />
        <Photo image = 'eiffel-tower'  name = 'France' />
        <Photo image = 'hongkong'  name = 'Hong Kong' />
        <Photo image = 'manchester'  name = 'Manchester' />
        <Photo image = 'new-zealand'  name = 'New Zealand' />
        <Photo image = 'newyork'  name = 'New York' />
        
        
        
        </div>

    )
}

export {Photos}