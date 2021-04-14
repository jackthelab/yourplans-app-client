import React from 'react'
import { useDispatch } from 'react-redux'
import { logIn, resetAccountType, resetActivity, resetProfile } from '../actions/index'

const LogOutButton = () => {
    
    const dispatch = useDispatch()

    return (
        <button onClick={() => {
            // dispatch(logIn())
            dispatch(resetAccountType())
            // dispatch(resetActivity())
            // dispatch(resetProfile())
        }} className="btn btn-danger cta-btn">Log Out</button>
    )
}

export default LogOutButton