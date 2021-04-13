import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import { createBid } from '../actions/index'

//components
import CreateBidForm from '../components/CreateBidForm'

const UserProfilePage = () => {

    const activityType = useSelector(state => state.activityType)
    // const dispatch = useDispatch()

    return (

        <div className="sect-col">

            {activityType === "createBid" ? <CreateBidForm /> : null }

        </div>

    )

}

export default UserProfilePage