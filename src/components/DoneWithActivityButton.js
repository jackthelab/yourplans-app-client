import React from 'react'
import { useDispatch } from 'react-redux';
import { setActivity } from '../actions/index'

const DoneWithActivityButton = () => {
    
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setActivity(null))
    }

    return (
        <button onClick={() => handleClick()} className="btn cta-btn-inv">Quit Activity</button>
    )
}

export default DoneWithActivityButton