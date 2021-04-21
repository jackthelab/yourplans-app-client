import React, { useState } from 'react'
import { useSelector } from 'react-redux'

// components
import SmallBidResponseCard from '../components/SmallBidResponseCard'
import ResponseDetailsCard from '../components/ResponseDetailsCardFull'

const BusinessBidResponsesContainer = ({ responses }) => {

    const [pendingResponses, setOpenResponses] = useState(responses.filter( (res) => res.bid.open_status ))
    const selectedResponse = useSelector(state => state.selectedResponse)

    return (
        <>
            <div className="col-md-12">
                <h2 className="section-header">Responses</h2>
            </div>
            <div className="sect-col col-md-6">
                <div>
                    <h1>Pending Responses</h1>
                </div>
                <div>
                    { pendingResponses.length > 0 ? pendingResponses.map( (response, idx) => <SmallBidResponseCard response={ response } key={ idx } /> ) : <p>Looking for your next experience? Click the "See Open Bids" button below to get started!</p> }
                </div>
            </div>
            <div className="sect-col col-md-6">
                <div>
                    <h1>Selected Response</h1>
                </div>
                <div>
                    { selectedResponse ? <ResponseDetailsCard response={ selectedResponse } /> : <p>Select a response to see details</p> }
                </div>
            </div>
        </>
    )

}

export default BusinessBidResponsesContainer