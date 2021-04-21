import React from 'react'
import { useDispatch } from 'react-redux'
import { setAccountType, setProfile, setActivity, setBid, setResponse, setExperience } from '../actions/index'

const LogOutButton = () => {
    
    const dispatch = useDispatch()

    return (
        <button onClick={() => {
            dispatch(setAccountType())
            dispatch(setProfile())
            dispatch(setActivity())
            dispatch(setBid())
            dispatch(setResponse())
            dispatch(setExperience())
            localStorage.token = null
            localStorage.id = null
            localStorage.loggedIn = false
        }} className="btn btn-danger cta-btn">Log Out</button>
    )
}

export default LogOutButton