import React from 'react'
import { useSelector } from 'react-redux'

// containers
import AvailableBidsContainer from './AvailableBidsContainer'
import SelectedBidDetailsContainer from './SelectedBidDetailsContainer'

//components
import BidResponseForm from '../components/BidResponseForm'

const BusinessBidResponse = ({ availableBids }) => {

    const bid = useSelector(state => state.selectedBid)

    return(

        <div className="row">

            <div className="sect-col col-md-4">
                <AvailableBidsContainer availableBids={ availableBids } />
            </div>
            <div className="sect-col col-md-4">
                <SelectedBidDetailsContainer />
            </div>
            <div className="sect-col col-md-4">
                { bid ? <BidResponseForm /> : <h2>Please Select an Available Bid</h2> }
            </div>

        </div>

    )

}

export default BusinessBidResponse