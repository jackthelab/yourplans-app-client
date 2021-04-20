import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

// components
import BidDetailsCardFull from '../components/BidDetailsCardFull'

// containers
import ResponsesContainer from './ResponsesContainer'
import ConfirmationContainer from './ConfirmationContainer'

const UserCloseBidContainer = () => {  
    
    const currentBid = useSelector(state => state.selectedBid)

    return (
        <>
            <div className="sect-col col-md-4">
                <div className="row">
                    <h3>Bid</h3>
                </div>
                <div className="row">
                    { currentBid ? <BidDetailsCardFull bid={ currentBid } /> : null }
                </div>
            </div>
            <div className="sect-col col-md-4">
                <div className="row">
                    { currentBid ? <ResponsesContainer responses={ currentBid.bid_responses } /> : null }
                </div>
            </div>
            <div className="sect-col col-md-4">
                <ConfirmationContainer />
            </div>
        </>
    )

}

export default UserCloseBidContainer