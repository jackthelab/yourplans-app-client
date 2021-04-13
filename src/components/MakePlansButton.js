import React from 'react'
import { useSelector } from 'react-redux';

const MakePlansButton = () => {

    const accountType = useSelector(state => state.accountType)

    const handleClick = () => {
        if(accountType === "user"){
            console.log(`A ${accountType} would like to make plans`)
        } else if(accountType === "business"){
            console.log(`A ${accountType} would like to make plans`)
        } else {
            console.log("There is no account type chosen right now.")
        }
    }

    return (
        <button onClick={() => handleClick()} className="btn cta-btn">Make A Plan!</button>
    )
}

export default MakePlansButton