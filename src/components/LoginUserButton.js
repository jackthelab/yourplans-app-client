import React from 'react'
import { useDispatch } from 'react-redux';
import { logIn, setUserType } from '../actions/index'

const LoginUserButton = () => {

    const dispatch = useDispatch()

    return (
        <button onClick={() => {
            dispatch(logIn())
            dispatch(setUserType())
        }} className="btn cta-btn">Login Personal Account</button>
    )
}

export default LoginUserButton