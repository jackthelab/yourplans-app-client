import React from 'react'
import { useSelector } from 'react-redux'

//containers
import LandingPage from './LandingPage'
import UserLoginPage from './UserLoginPage'
import BusinessLoginPage from './BusinessLoginPage'
// import UserProfilePage from './UserProfilePage'
// import BusinessProfilePage from './BusinessProfilePage'

const Main = () => {

    const accountType = useSelector(state => state.accountType)
    const activityType = useSelector(state => state.activityType)

    return (
        <div id="main-container">

            {accountType === null && activityType === null ? <LandingPage /> : null}
            {accountType === "user" && activityType === "login" ? <UserLoginPage /> : accountType === "user" && activityType === "createBid" ? <h1>A User wants to {`${activityType}`}</h1> : null }
            {accountType === "business" && activityType === "login" ? <BusinessLoginPage /> : accountType === "business" ? <h1>A business want to {`${activityType}`}</h1> : null }

        </div>
    )
}

export default Main