import React from 'react'
import { useDispatch } from 'react-redux'
import { setAccountType, setProfile } from '../actions/index'

const LogOutButton = () => {
    
    const dispatch = useDispatch()

    return (
        <button onClick={() => {
            dispatch(setAccountType(null))
            dispatch(setProfile(null))
        }} className="btn btn-danger cta-btn">Log Out</button>
    )
}

export default LogOutButton