import React from 'react'

//components
import SmallBidCard from '../components/SmallBidCard'

const UserBidsContainer = ({ bids }) => {

    return (

        <>
            <div className="row">
                <h1>Bids</h1>
            </div>
        
            <div className="row">
                { bids.map( (bid, idx) => <SmallBidCard bid={bid} idx={idx} /> ) }
            </div>
        </>

    )

}

export default UserBidsContainer