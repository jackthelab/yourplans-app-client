import React from 'react'
import { useSelector } from 'react-redux'

// components
import BidDetailsCardFull from '../components/BidDetailsCardFull'


const SelectedBidDetailsContainer = () => {

    const selectedBid = useSelector(state => state.selectedBid)

    return (

        <>
            <div className="row">
                <h3>Bid Details</h3>
            </div>

            <div className="row">
                { selectedBid ? <BidDetailsCardFull bid={selectedBid} /> : <h3>Please Select an Available Bid</h3> }
            </div>
        </>

    )

}

export default SelectedBidDetailsContainer