import React from 'react'
import { useSelector } from 'react-redux';

//components
import CreateBidForm from '../components/CreateBidForm'

const UserProfilePage = () => {

    // const activityType = useSelector(state => state.activityType)
    // const profileDetails = useSelector(state => state.profile)

    return (

        <div className="sect-col" style={{ height: "auto" }}>

            {/* { !profileDetails.id ? <h1>Need to login!</h1> : <h1>{`${profileDetails}`}</h1> }
            { activityType === "createBid" && profileDetails ? <CreateBidForm /> : null } */}

        </div>

    )

}

export default UserProfilePage