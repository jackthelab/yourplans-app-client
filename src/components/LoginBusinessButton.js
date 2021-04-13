import React from 'react'
import { useDispatch } from 'react-redux';
import { logIn, setBusinessType } from '../actions/index'

const LoginBusinessButton = () => {

    const dispatch = useDispatch()

    return (
        <button onClick={() => {
            dispatch(logIn())
            dispatch(setBusinessType())
        }} className="btn cta-btn">Login Business Account</button>
    )
}

export default LoginBusinessButton