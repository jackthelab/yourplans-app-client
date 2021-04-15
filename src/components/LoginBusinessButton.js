import React from 'react'
import { useDispatch } from 'react-redux';
import { setProfile, setAccountType } from '../actions/index'

const LoginBusinessButton = () => {

    const dispatch = useDispatch()

    return (
        <button onClick={() => {
            dispatch(setProfile(null))
            dispatch(setAccountType('business'))
        }} className="btn cta-btn">Login Business Account</button>
    )
}

export default LoginBusinessButton