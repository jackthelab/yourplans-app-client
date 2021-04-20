import React, { useState } from 'react'
import { useSelector } from 'react-redux'

// containers
// import BusinessBidResponsesContainer from './BusinessBidResponsesContainer'
// import BusinessExperiencesContainer from './BusinessExperiencesContainer'
// import BusinessStatsContainer from './BusinessStatsContainer'

const BusinessProfileHome = () => {

    const profileDetails = useSelector(state => state.profile)
    
    const [businessBidResponses, setBusinessBidResponses] = useState(profileDetails.bid_responses.length)
    const [businessExperiences, setBusinessExperiences] = useState(profileDetails.experiences.length)
    
    return (
        
        <div className="row">

            <div className="sect-col col-md-4">
                <h2>Bid Responses</h2>
                <p>{`No. of Bid Responses: ${ businessBidResponses }`}</p>
            </div>
            <div className="sect-col col-md-4">
                <h2>Experiences</h2>
                <p>{`No. of Experiences: ${ businessExperiences }`}</p>
            </div>
            <div className="sect-col col-md-4">
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