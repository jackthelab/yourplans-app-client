import React from 'react'
import { useSelector } from 'react-redux'

//components
import SelectBidButton from './SelectBidButton'
import CloseBidButton from './CloseBidButton'

const SmallBidCard = ({ bid, idx }) => {

    const activity = useSelector(state => state.activity)
    const accountType = useSelector(state => state.accountType)

    return (
        <div key={idx} className="col-md-8 sm-bid-card">
            <h6>{ bid.name }</h6>
            <p>{ `Budget: $${bid.budget}` }</p>
            <p>{ `Party Size: ${bid.num_in_party}` }</p>
            <p>{ `${bid.city}, ${bid.state}` }</p>
            { activity === 'bidResponse' ? <SelectBidButton bid={ bid } /> : null }
            { accountType === 'user' && bid.open_status ? <CloseBidButton bid={ bid } /> : null }
            { accountType === 'user' && !bid.open_status ? <button className="btn cta-btn">Details</button> : null }
        </div>
    )

}

export default SmallBidCard