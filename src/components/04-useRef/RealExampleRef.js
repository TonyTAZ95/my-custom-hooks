import React, { useState } from 'react'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks'

import './effects.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState( false );
    const [tex, setTex] = useState( 'Show' );

    return (
        <div>

            <h1>Real Example Ref</h1>
            <hr />

            { show && <MultipleCustomHooks/> }

            <button
                className = "btn btn-primary mt-5"
                onClick = { () => {
                    setShow( !show );
                    if ( show ) {
                        setTex( 'Show' );
                    } else {
                        setTex( 'Hide' );
                    }
                } }
            >
                { tex }
            </button>

        </div>
    )
}
