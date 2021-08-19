import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

/*
    HOOK USEEFFECT:

    permite ejecutar efectos secundarios cuando algo 
    suceda en nuestros componentes.
*/

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email }= formState;

    useEffect(() => {
        // console.log( 'Hey!' ); 
    }, [] );

    useEffect(() => {
        // console.log( 'Ha cambiado el nombre!' ); 
    }, [ formState ] );
    
    useEffect(() => {
        // console.log( 'Ha cambiado el email!' ); 
    }, [ email ] );

    const handleInputChange = ( { target } ) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className = "form-group" >
                <input 
                    type = "text"
                    name = "name"
                    className = "form-control"
                    placeholder = "Tu nombre"
                    autoComplete = "off"
                    value = { name }
                    onChange = { handleInputChange }
                />
            </div>

            <div className = "form-group" >
                <input 
                    type = "text"
                    name = "email"
                    className = "form-control"
                    placeholder = "email@gmail.com"
                    autoComplete = "off"
                    value = { email }
                    onChange = { handleInputChange }
                />
            </div>

            { (name === '123' ) && <Message /> }
        </>
    )
}
