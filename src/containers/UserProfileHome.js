import React from 'react';
import { useSelector } from 'react-redux';

// containers
import UserBidsContainer from './UserBidsContainer'
import UserExperiencesContainer from './UserExperiencesContainer'

const UserProfileHome = () => {

    const profileDetails = useSelector(state => state.profile)

    return (
        <>
            <div className="col-md-6 sect-col">
                <UserBidsContainer bids={profileDetails.bids} />
            </div>
            <div className="sect-col col-md-6">
                <UserExperiencesContainer experiences={profileDetails.experiences} />
            </div>
        </>
    )

}

export default UserProfileHome