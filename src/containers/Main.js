import React from 'react'
import { useSelector } from 'react-redux'

//containers
import LandingPage from './LandingPage'
import UserLoginPage from './UserLoginPage'
import BusinessLoginPage from './BusinessLoginPage'
import UserProfilePage from './UserProfilePage'
import BusinessProfilePage from './BusinessProfilePage'

const Main = () => {

    const accountType = useSelector(state => state.accountType)
    const profileDetails = useSelector(state => state.profile)

    return (
        <div id="main-container">

            { accountType === null ? <LandingPage /> : null }
            { accountType === "user" ? profileDetails && !profileDetails['message'] && !profileDetails['error'] ? <UserProfilePage /> : <UserLoginPage /> : null }
            { accountType === "business" ? profileDetails && !profileDetails['message'] && !profileDetails['error'] ? <BusinessProfilePage /> : <BusinessLoginPage /> : null }

        </div>
    )
}

export default Main