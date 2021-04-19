import React from 'react'

// components
import SmallBidCard from '../components/SmallBidCard'

const AvailableBidsContainer = ({ availableBids }) => {

    return(

        <>
            <div className="row">
                <h2>Open Bids</h2>
            </div>
            <div className="row">
                { availableBids.map((bid, idx) => <SmallBidCard bid={ bid } idx={ idx } /> ) }
            </div>
        </>

    )

}

export default AvailableBidsContainer