import React, { useState } from 'react'
import { useSelector } from 'react-redux';

//components
import CreateBidForm from '../components/CreateBidForm'
import MakePlansButton from '../components/MakePlansButton'
import DoneWithActivityButton from '../components/DoneWithActivityButton'

//containers
import UserProfileHome from './UserProfileHome'

const UserProfilePage = () => {

    const profileDetails = useSelector(state => state.profile)
    const activity = useSelector(state => state.activity)

    return (

        <div className="container" style={{ height: "auto" }}>

            <div className="row">
                { profileDetails ? <h1>{`Welcome, ${profileDetails.first_name}!`}</h1> : null }
            </div>
            <div className="row">
                { profileDetails ? activity === 'createBid' ? <CreateBidForm /> : <UserProfileHome /> : null }
            </div>

            { activity === 'createBid' ? <DoneWithActivityButton /> : <MakePlansButton /> }

        </div>

    )

}

export default UserProfilePage