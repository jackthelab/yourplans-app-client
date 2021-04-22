import React, { useState } from 'react'
import { useSelector } from 'react-redux'

//components
import SmallBidCard from '../components/SmallBidCard'
import BidDetailsCardFull from '../components/BidDetailsCardFull'

const UserBidsContainer = () => { 

    const openBids = useSelector(state => state.openBidsList)

    // const [openBids, setOpenBids] = useState(bids.filter(bid => bid.open_status))
    // const [closedBids, setClosedBids] = useState(bids.filter(bid => !bid.open_status))

    const selectedBid = useSelector(state => state.selectedBid)

    return (

        <>
            <div className="col-md-12">
                <h2 className="section-header">Bids</h2>
            </div>
            <div className="col-md-6 sect-col">
                <div>
                    <h3>Open</h3>
                </div>
                <div>
                    { openBids.length > 0 ? openBids.map( (bid, idx) => <SmallBidCard bid={ bid } key={ idx } /> ): <p>Looking for your next adventure? Click the "Make a Plan!" button below to get started!</p> }
                </div>
            </div>
            <div className="col-md-6 sect-col">
                <div>
                    <h3>Details</h3>
                </div>        
                <div>
                    { selectedBid ? <BidDetailsCardFull bid={ selectedBid } /> : <p>Choose the "Select" button on a bid to see more info</p> }
                </div>
            </div>
        </>

    )

}

export default UserBidsContainer