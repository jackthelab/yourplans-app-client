import React from 'react'

// containers
import AvailableBidsContainer from './AvailableBidsContainer'

const BusinessBidResponse = ({ availableBids }) => {

    return(

        <div className="row">

        <div className="sect-col col-md-4">
            <AvailableBidsContainer availableBids={ availableBids } />
        </div>
        <div className="sect-col col-md-4">
            <h2>Selected Bid Details</h2>
        </div>
        <div className="sect-col col-md-4">
            <h2>Response Form</h2>
        </div>

        </div>

    )

}

export default BusinessBidResponse