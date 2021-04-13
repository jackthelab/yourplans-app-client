import React from 'react'

//components

import LogOutButton from '../components/LogOutButton'
import MakePlansButton from '../components/MakePlansButton'

const LoggedInButtons = () => {
    return(
        <>
            <MakePlansButton />
            <LogOutButton />
        </>
    )
}

export default LoggedInButtons