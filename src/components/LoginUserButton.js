import React from 'react'
import { useDispatch } from 'react-redux';
import { setProfile, setAccountType } from '../actions/index'

const LoginUserButton = () => {

    const dispatch = useDispatch()

    return (
        <button onClick={() => {
            dispatch(setAccountType('user'))
            dispatch(setProfile(null))
        }} className="btn cta-btn">Login Personal Account</button>
    )
}

export default LoginUserButton