import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setProfile } from '../actions/index'

const BusinessLoginForm = () => {

    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const reqObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                business: {
                    email: inputEmail,
                    password: inputPassword
                }
            })
        }

        fetch('http://localhost:3000/api/v1/businesses/login', reqObj)
            .then(r => r.json())
            .then(resData => {
                fetchBusinessProfile(resData.jwt)
            })
    }

    const dispatch = useDispatch()

    const fetchBusinessProfile = (resToken) => {
        fetch('http://localhost:3000/api/v1/businesses/profile', {headers: {Authorization: `Bearer ${resToken}`}})
            .then(r => r.json())
            .then(resData => {
                dispatch(setProfile(resData))
            })
    }

    return (
        <>

            <h1>Welcome Back!</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
            
                <div>
                    <label>Email</label>                    
                </div>
                <div>
                    <input type="email" name="email" onChange={(e) => setInputEmail(e.target.value)} />
                </div>
       
                <div>
                    <label>Password</label>
                </div>
                <div>
                    <input type="password" name="password" onChange={(e) => setInputPassword(e.target.value)} />
                </div>
                  
                <div className="submit-btn">
                    <input className="btn cta-btn-inv" type="submit" value="Login"/>
                </div>
            </form>

        </>
    )

}

export default BusinessLoginForm