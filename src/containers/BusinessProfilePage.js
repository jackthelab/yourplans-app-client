import React, { useState } from 'react'
import { useSelector } from 'react-redux';
// import { setActivity } from '../actions/index'

//containers
import BusinessProfileHome from './BusinessProfileHome'
import BusinessBidResponse from './BusinessBidResponse'

// components
import SeeBidsButton from '../components/SeeBidsButton'
import DoneWithActivityButton from '../components/DoneWithActivityButton'

const BusinessProfilePage = () => {

    const activityType = useSelector(state => state.activity)
    const profileDetails = useSelector(state => state.profile)
    const [availableBids, setAvailableBids] = useState([])

    return (

        <div className="container" style={{ height: "auto" }}>

            <div className="row">
                <h1>{`Welcome, ${profileDetails.name}`}</h1>
            </div>
            <div className="row">
                { activityType === "bidResponse" ? <BusinessBidResponse availableBids={availableBids} /> : <BusinessProfileHome /> }
            </div>

            { activityType === 'bidResponse' ? <DoneWithActivityButton /> : <SeeBidsButton setAvailableBids={setAvailableBids} /> }

        </div>

    )

}

export default BusinessProfilePage