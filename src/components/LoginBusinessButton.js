import React from 'react'
import { useDispatch } from 'react-redux';
import { logIn, setBusinessType, loginActivity } from '../actions/index'

const LoginBusinessButton = () => {

    const dispatch = useDispatch()

    return (
        <button onClick={() => {
            dispatch(logIn())
            dispatch(setBusinessType())
            dispatch(loginActivity())
        }} className="btn cta-btn">Login Business Account</button>
    )
}

export default LoginBusinessButton