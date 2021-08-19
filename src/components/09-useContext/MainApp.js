import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

const MainApp = () => {
    
    const [user, setUser] = useState( {} )

    return (

        <UserContext.Provider value = { {
            user,
            setUser
        } } >
            
            <AppRouter/>

        </UserContext.Provider>

        // <div>
        //     {/* <h1>MainApp</h1>
        //     <hr/> */}
        //     <AppRouter/>
        // </div>
    )
}

export default MainApp;