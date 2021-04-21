import React, { useState } from 'react'
import { useSelector } from 'react-redux'

// containers
import BusinessBidResponsesContainer from './BusinessBidResponsesContainer'
import BusinessExperiencesContainer from './BusinessExperiencesContainer'
// import BusinessStatsContainer from './BusinessStatsContainer'

const BusinessProfileHome = () => {

    const profileDetails = useSelector(state => state.profile)
    
    const [businessBidResponses, setBusinessBidResponses] = useState(profileDetails.bid_responses)
    const [businessExperiences, setBusinessExperiences] = useState(profileDetails.experiences)
    
    return (
        
        <div>

            <div className="row">                
                <BusinessExperiencesContainer experiences={ businessExperiences } />
            </div>
            <div className="row">
                {/* <h2>Bid Responses</h2>
                <p>{`No. of Bid Responses: ${ businessBidResponses }`}</p> */}
                <BusinessBidResponsesContainer responses={ businessBidResponses } />
            </div>
            <div className="row">
                <h2>Business Dashboard Stats</h2>
                <ul>
                    <li>Deals Won?</li>
                    <li>$ Amount Won?</li>
                    <li>Other Stats?</li>
                </ul>
            </div>

        </div>

    )

}

export default BusinessProfileHome