import React from 'react'
import { useSelector } from 'react-redux'

// containers
// import BusinessBidResponsesContainer from './BusinessBidResponsesContainer'
// import BusinessExperiencesContainer from './BusinessExperiencesContainer'
// import BusinessStatsContainer from './BusinessStatsContainer'

const BusinessProfileHome = () => {

    const profileDetails = useSelector(state => state.profile)

    return (
        
        <div className="row">

            <div className="sect-col col-md-4">
                <h2>Bid Responses</h2>
                <p>{`No. of Bid Responses: ${profileDetails.bid_responses.length}`}</p>
            </div>
            <div className="sect-col col-md-4">
                <h2>Experiences</h2>
                <p>{`No. of Experiences: ${profileDetails.experiences.length}`}</p>
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