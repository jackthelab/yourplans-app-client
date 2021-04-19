import React from 'react'
import { useDispatch } from 'react-redux';
import { setActivity, setBid } from '../actions/index'

const DoneWithActivityButton = () => {
    
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setActivity(null))
        dispatch(setBid(null))
    }

    return (
        <button onClick={() => handleClick()} className="btn cta-btn">Quit Activity</button>
    )
}

export default DoneWithActivityButton