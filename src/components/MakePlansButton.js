import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setActivity } from '../actions/index'

const MakePlansButton = () => {
    
    const dispatch = useDispatch()

    // const accountType = useSelector(state => state.accountType)

    const handleClick = () => {
        // alert(`A ${accountType} would like to make plans`)
        dispatch(setActivity('createBid'))
    }

    return (
        <button onClick={() => handleClick()} className="btn cta-btn-inv">Make A Plan!</button>
    )
}

export default MakePlansButton