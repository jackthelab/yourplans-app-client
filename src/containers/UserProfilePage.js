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

        <div className="sect-col" style={{ height: "auto" }}>

            { activity === 'createBid' ? <DoneWithActivityButton /> : <MakePlansButton /> }
            { profileDetails ? activity === 'createBid' ? <CreateBidForm /> : <UserProfileHome /> : null }

        </div>

    )

}

export default UserProfilePage