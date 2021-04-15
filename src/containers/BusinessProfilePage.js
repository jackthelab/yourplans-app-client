import React from 'react'
import { useSelector } from 'react-redux';
// import { createBid } from '../actions/index'

const BusinessProfilePage = () => {

    // const activityType = useSelector(state => state.activityType)
    // const dispatch = useDispatch()
    const profileDetails = useSelector(state => state.profile)

    return (

        <div className="sect-col" style={{ height: "auto" }}>

            {/* {activityType === "createBid" ? <h1>Business Response Time</h1> : null } */}
            { profileDetails ? <h1>{`Welcome to your business profile, ${profileDetails.name}`}</h1> : null }

        </div>

    )

}

export default BusinessProfilePage