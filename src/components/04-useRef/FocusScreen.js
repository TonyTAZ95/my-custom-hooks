import React, { useRef } from 'react';
import './effects.css';

export const FocusScreen = () => {

    /* 

    */
    const inputRef = useRef(); 
    // console.log( inputRef );

    const handleClick = () => {

        inputRef.current.select();
        console.log( inputRef );
        // document.querySelector( 'input' ).select();
        // document.querySelector( 'input' ).focus();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input
                ref = { inputRef }
                className = "form-control"
                placeholder = "Su Nombre"
            />

            <button 
                className = "btn btn-outline-priary mt-5"
                onClick = { handleClick }
            >
                Focus
            </button>
        </div>
    )
}
