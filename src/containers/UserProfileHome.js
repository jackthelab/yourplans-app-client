import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// containers
import UserBidsContainer from './UserBidsContainer'
import UserExperiencesContainer from './UserExperiencesContainer'

const UserProfileHome = () => {

    const profileDetails = useSelector(state => state.profile)
    // const userBids = useSelector(state => state.openBidsList)
    // const userExperiences = useSelector(state => state.experiencesList)
    
    // const [userBids, setUserBids] = useState(profileDetails.bids)
    // const [userExperiences, setUserExperiences] = useState(profileDetails.experiences)

    return (
        <>
            <div className="row">
                {/* <UserBidsContainer bids={ userBids } /> */}
                <UserBidsContainer />
            </div>
            <div className="row">
                {/* <UserExperiencesContainer experiences={ userExperiences } /> */}
                <UserExperiencesContainer />
            </div>
        </>
    )

}

export default UserProfileHome