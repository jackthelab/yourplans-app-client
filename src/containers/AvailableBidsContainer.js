import React from 'react'

// components
import SmallBidCard from '../components/SmallBidCard'

const AvailableBidsContainer = ({ availableBids }) => {

    return(

        <>
            <div className="row">
                <h3>Open Bids</h3>
            </div>
            <div className="row">
                { availableBids ? availableBids.map((bid, idx) => <SmallBidCard bid={ bid } idx={ idx } /> ) : null }
            </div>
        </>

    )

}

export default AvailableBidsContainer