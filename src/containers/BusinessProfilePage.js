import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import { createBid } from '../actions/index'

const BusinessProfilePage = () => {

    const activityType = useSelector(state => state.activityType)
    // const dispatch = useDispatch()

    return (

        <>

            {activityType === "createBid" ? <h1>Business Response Time</h1> : null }

        </>

    )

}

export default BusinessProfilePage