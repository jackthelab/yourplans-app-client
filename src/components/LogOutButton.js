import React from 'react'
import { useDispatch } from 'react-redux'
import { logIn, resetAccountType, resetActivity } from '../actions/index'

const LogOutButton = () => {
    
    const dispatch = useDispatch()

    return (
        <button onClick={() => {
            dispatch(logIn())
            dispatch(resetAccountType())
            dispatch(resetActivity())
        }} className="btn btn-danger cta-btn">Log Out</button>
    )
}

export default LogOutButton