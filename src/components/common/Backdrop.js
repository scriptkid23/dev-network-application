import React from 'react';
import  '../../styles/backdrop.css'
export default ({show}) => {

    return(
        <div className={` m-auto fade modal-backdrop ${show ? 'show' : ''}`}>
            <section
                className="h-100 w-100 d-flex justify-content-center align-items-center"
            ><span className="loader"> </span></section>
        </div>
        
    )
}   