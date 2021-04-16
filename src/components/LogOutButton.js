import React from 'react'
import { useDispatch } from 'react-redux'
import { setAccountType, setProfile, setActivity } from '../actions/index'

const LogOutButton = () => {
    
    const dispatch = useDispatch()

    return (
        <button onClick={() => {
            dispatch(setAccountType(null))
            dispatch(setProfile(null))
            dispatch(setActivity(null))
            localStorage.token = null
            localStorage.id = null
            localStorage.loggedIn = false
        }} className="btn btn-danger cta-btn">Log Out</button>
    )
}

export default LogOutButton