import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setActivity } from '../actions/index'

const DoneWithActivityButton = () => {
    
    const dispatch = useDispatch()

    // const accountType = useSelector(state => state.accountType)

    const handleClick = () => {
        // alert(`A ${accountType} would like to make plans`)
        dispatch(setActivity(null))
    }

    return (
        <button onClick={() => handleClick()} className="btn cta-btn-inv">Quit Activity</button>
    )
}

export default DoneWithActivityButton