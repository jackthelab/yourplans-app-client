import React from 'react'
import { useDispatch } from 'react-redux';
import { logIn, setUserType, loginActivity } from '../actions/index'

const LoginUserButton = () => {

    const dispatch = useDispatch()

    return (
        <button onClick={() => {
            // dispatch(logIn())
            dispatch(setUserType())
            // dispatch(loginActivity())
        }} className="btn cta-btn">Login Personal Account</button>
    )
}

export default LoginUserButton