import React from 'react'
import { useSelector } from 'react-redux'

const Main = () => {

    const accountType = useSelector(state => state.accountType)

    return (
        <div id="main-container">

            <h1>{accountType}</h1>

        </div>
    )
}

export default Main