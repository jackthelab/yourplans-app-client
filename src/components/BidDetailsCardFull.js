import React from 'react'

const BidDetailsCardFull = ({ bid }) => {

    return (
        <div className="full-bid-card">
            <h5>{bid.name}</h5>
            <hr></hr>
            <h6>Budget</h6>
            <p>{`$${bid.budget}`}</p>
            <h6>Party Size</h6>
            <p>{`${bid.num_in_party} people`}</p>
            <h6>Where?</h6>
            <p>{`${bid.city}, ${bid.state}`}</p>
            <h6>When? (YYYY-MM-DD)</h6>
            <p>{`${bid.date}`}</p>
        </div>
    )

}

export default BidDetailsCardFull