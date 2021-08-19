import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './effects.css';
import LoadingComponent from '../LoadingComponent';

export const MultipleCustomHooks = () => {

    const { counter , increment } = useCounter( 1 );
    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    const { author, quote } = !!data && data[0];
    
    
    console.log( author, quote );

    return (
        <div>
            <h1>Breaking Bad Quotes!!!!</h1>
            <hr />

            { 
                loading ?
                (
                    <LoadingComponent />
                )
                :
                (
                    <blockquote className = "blockquote text-right">
                        <p className = "mb-4" > { quote } </p>
                        <footer className = "blockquote-footer"> { author } </footer>
                    </blockquote>
                )
            }

            <button 
                className = "btn btn-primary" 
                onClick = { increment } 
            >
                Siguiente
            </button>

        </div>
    )
}

export default MultipleCustomHooks;