import React from 'react'
import { useSelector } from 'react-redux'

//components
import SelectResponseButton from './SelectResponseButton'

const SmallBidResponseCard = ({ response, idx }) => {

    const activity = useSelector(state => state.activity)
    const accountType = useSelector(state => state.accountType)

    return (
        <div key={idx} className="col-md-8 sm-bid-card">
            <h6>{ response.business.name }</h6>
            <p>{ `Price: $${response.price}` }</p>
            <p>{ `Category: ${response.category}` }</p>
            { activity === 'closeBid' ? <SelectResponseButton response={ response } /> : null }
        </div>
    )

}

export default SmallBidResponseCard