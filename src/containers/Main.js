import React from 'react'
import { useSelector } from 'react-redux'

const Main = () => {

    const accountType = useSelector(state => state.accountType)
    const activityType = useSelector(state => state.activityType)

    return (
        <div id="main-container">

            {accountType === "user" && activityType === "login" ? <h1>A User Wants to Login</h1> : accountType === "user" ? <h1>A User wants to {`${activityType}`}</h1> : null }
            {accountType === "business" && activityType === "login" ? <h1>A Business Wants to Login</h1> : accountType === "business" ? <h1>A business want to {`${activityType}`}</h1> : null }

        </div>
    )
}

export default Main