import React from 'react'

// components
import SmallBidCard from '../components/SmallBidCard'

const AvailableBidsContainer = ({ availableBids }) => {

    return(

        <>
            { availableBids.map((bid, idx) => <SmallBidCard bid={ bid } idx={ idx } /> ) }
        </>

    )

}

export default AvailableBidsContainer