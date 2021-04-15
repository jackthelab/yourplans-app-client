import React from 'react'
import { useDispatch } from 'react-redux';
import { setActivity } from '../actions/index'

const MakePlansButton = () => {
    
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setActivity('createBid'))
    }

    return (
        <button onClick={() => handleClick()} className="btn cta-btn-inv">Make A Plan!</button>
    )
}

export default MakePlansButton