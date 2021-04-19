import React from 'react'
import { useSelector } from 'react-redux'

//components
import SelectBidButton from './SelectBidButton'

const SmallBidCard = ({ bid, idx }) => {

    const activity = useSelector(state => state.activity)

    return (
        <div key={idx} className="col-md-8 sm-bid-card">
            <h6>{ bid.name }</h6>
            <p>{ `Budget: $${bid.budget}` }</p>
            <p>{ `Party Size: ${bid.num_in_party}` }</p>
            <p>{ `${bid.city}, ${bid.state}` }</p>
            { activity === 'bidResponse' ? <SelectBidButton bid={ bid } /> : null }
        </div>
    )

}

export default SmallBidCard