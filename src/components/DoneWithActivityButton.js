import React from 'react'
import { useDispatch } from 'react-redux';
import { setActivity, setBid, setResponse, setExperience } from '../actions/index'

const DoneWithActivityButton = () => {
    
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setActivity())
        dispatch(setBid())
        dispatch(setResponse())
        dispatch(setExperience())
    }

    return (
        <button onClick={() => handleClick()} className="btn cta-btn">Quit Activity</button>
    )
}

export default DoneWithActivityButton