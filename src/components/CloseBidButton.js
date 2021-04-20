import React from 'react'
import { useDispatch } from 'react-redux'
import { setBid, setActivity } from '../actions/index'

const CloseBidButton = ({ bid }) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setBid(bid))
        dispatch(setActivity('closeBid'))
    }

    return (
        <button onClick={handleClick} className="btn cta-btn">Award/Close</button>
    )

}

export default CloseBidButton