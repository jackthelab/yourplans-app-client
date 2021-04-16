import React from 'react'

const SmallBidCard = ({ bid, idx }) => {

    return (
        <div key={idx} className="col-md-3 sm-bid-card">
            <h6>{ bid.name }</h6>
            <p>{ `Budget: $${bid.budget}` }</p>
            <p>{ `Party Size: ${bid.num_in_party}` }</p>
            <p>{ `${bid.city}, ${bid.state}` }</p>
        </div>
    )

}

export default SmallBidCard