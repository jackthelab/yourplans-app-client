import React from 'react'
import { useDispatch } from 'react-redux';
import { setActivity } from '../actions/index'

const MakePlansButton = ({ setAvailableBids }) => {
    
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setActivity('bidResponse'))
        fetch('http://localhost:3000/api/v1/businesses/open_bids', {headers: {Authorization: `Bearer ${localStorage.token}`}})
            .then(res => res.json())
            .then(bidData => {
                setAvailableBids(bidData.bids)
                console.log(bidData.bids)
            })
    }

    return (
        <button onClick={() => handleClick()} className="btn cta-btn">See Open Bids</button>
    )
}

export default MakePlansButton