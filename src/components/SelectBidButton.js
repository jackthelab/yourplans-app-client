import React from 'react'
import { useDispatch } from 'react-redux'
import { setBid } from '../actions/index'

const SelectBidButton = ({ bid }) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        console.log(bid)
        dispatch(setBid(bid))
    }

    return (
        <button onClick={handleClick} className="btn cta-btn">Select</button>
    )

}

export default SelectBidButton