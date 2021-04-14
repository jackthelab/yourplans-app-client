import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import { createBid } from '../actions/index'

const MakePlansButton = () => {

    const accountType = useSelector(state => state.accountType)
    
    // const dispatch = useDispatch()

    const handleClick = () => {
        if(accountType === "user"){
            console.log(`A ${accountType} would like to make plans`)
        } else if(accountType === "business"){
            console.log(`A ${accountType} would like to make plans`)
        } else {
            console.log("There is no account type chosen right now.")
        }
        
        // dispatch(createBid())
    }

    return (
        <button onClick={() => handleClick()} className="btn cta-btn">Make A Plan!</button>
    )
}

export default MakePlansButton