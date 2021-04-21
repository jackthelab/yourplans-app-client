import React, { useState } from 'react'

//components
import SmallBidCard from '../components/SmallBidCard'

const UserBidsContainer = ({ bids }) => { 

    const [openBids, setOpenBids] = useState(bids.filter(bid => bid.open_status))
    const [closedBids, setClosedBids] = useState(bids.filter(bid => !bid.open_status))

    return (

        <>
            <div className="col-md-6 sect-col">
                <div>
                    <h1>Open Bids</h1>
                </div>
                <div>
                    { openBids.map( (bid, idx) => <SmallBidCard bid={bid} idx={idx} /> ) }
                </div>
            </div>
            <div className="col-md-6 sect-col">
                <div>
                    <h1>Closed Bids</h1>
                </div>        
                <div>
                    { closedBids.map( (bid, idx) => <SmallBidCard bid={bid} idx={idx} /> ) }
                </div>
            </div>
        </>

    )

}

export default UserBidsContainer