import React from 'react'
import { useSelector } from 'react-redux'

//containers
// import LandingPage from './LandingPage'
// import UserLoginPage from './UserLoginPage'
// import BusinessLoginPage from './BusinessLoginPage'

const Main = () => {

    const accountType = useSelector(state => state.accountType)
    const activityType = useSelector(state => state.activityType)

    return (
        <div id="main-container">

            {accountType === null && activityType === null ? <h1>Landing Page</h1> : null}
            {accountType === "user" && activityType === "login" ? <h1>A User Wants to Login</h1> : accountType === "user" ? <h1>A User wants to {`${activityType}`}</h1> : null }
            {accountType === "business" && activityType === "login" ? <h1>A Business Wants to Login</h1> : accountType === "business" ? <h1>A business want to {`${activityType}`}</h1> : null }

        </div>
    )
}

export default Main