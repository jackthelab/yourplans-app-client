import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// containers
import UserBidsContainer from './UserBidsContainer'
import UserExperiencesContainer from './UserExperiencesContainer'

const UserProfileHome = () => {

    const profileDetails = useSelector(state => state.profile)
    
    const [userBids, setUserBids] = useState(profileDetails.bids)
    const [userExperiences, setUserExperiences] = useState(profileDetails.experiences)

    return (
        <>
            <div className="row">
                <UserBidsContainer bids={ userBids } />
            </div>
            <div className="row">
                <UserExperiencesContainer experiences={ userExperiences } />
            </div>
        </>
    )

}

export default UserProfileHome