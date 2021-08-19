import React, { useRef, useState, useLayoutEffect } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
//////////////////////////////////////////
import { Chart } from 'react-charts';
//////////////////////////////////////////

import './layout.css';
// import LoadingComponent from '../LoadingComponent';

export const Layout = () => {

    const { counter , increment } = useCounter( 1 );
    const { data1 } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    const { quote } = !!data1 && data1[0];
    
    const pTag = useRef();
    const [boxSize, setBoxSize] = useState( {} )

    useLayoutEffect(() => { // Cada que quote cambia, significa que cambió también el tamaño de la caja que lo contiene
        
        setBoxSize( pTag.current.getBoundingClientRect() );

    }, [ quote ]) 
    
    console.log( quote );

    //////////////////////////////////////////
    const data = React.useMemo(
        () => [
          [[1, 11], [2, 15], [3, 13], [4, 9], [5, 12], [6, 20]],
          [[1, 6], [2, 7], [3, 8], [4, 7], [5, 18], [6, 2]],
          [[1, 1], [2, 2], [3, 3], [4, 6], [5, 1], [6, 15]]
        ],
        []
    )
     
    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )
     //////////////////////////////////////////

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <blockquote className = "blockquote text-right">
                <p 
                    className = "mb-4"
                    ref = { pTag }
                > 
                    { quote } 
                </p>
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>

            <button 
                className = "btn btn-primary" 
                onClick = { increment } 
            >
                Siguiente
            </button>

            {/* ////////////////////////////////////////// */}
            <div
              style={{
                width: '400px',
                height: '300px'
              }}
            >
              <Chart data={data} axes={axes} />
            </div>
            {/* ////////////////////////////////////////// */}

        </div>
    )
}

export default Layout;