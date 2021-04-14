import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setProfile } from '../actions/index'

const UserSignUpForm = () => {

    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [inputFirstName, setInputFirstName] = useState('')
    const [inputLastName, setInputLastName] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // alert(`A User tried creating an account with ${inputEmail} and ${inputPassword !== '' ? 'a password' : 'without a password'}`)
        const reqObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: {
                    first_name: inputFirstName,
                    last_name: inputLastName,
                    email: inputEmail,
                    password: inputPassword
                }
            })
        }

        fetch('http://localhost:3000/api/v1/users', reqObj)
            .then(r => r.json())
            .then(resData => {
                // console.log(resData)
                fetchUserProfile(resData.jwt)
            })
    }

    const dispatch = useDispatch()

    const fetchUserProfile = (resToken) => {
        fetch('http://localhost:3000/api/v1/users/profile', {headers: {Authorization: `Bearer ${resToken}`}})
            .then(r => r.json())
            .then(resData => {
                dispatch(setProfile(resData))
            })
    }

    return (
        <>

            <h1>Ready to Get Started?</h1>

            <form onSubmit={(e) => handleSubmit(e)}>

                <div>
                    <label>First Name</label>
                </div>
                <div>
                    <input type="text" name="first_name" onChange={(e) => setInputFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name</label>
                </div>
                <div>
                    <input type="text" name="last_name" onChange={(e) => setInputLastName(e.target.value)} />
                </div>
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
                    <input className="btn cta-btn-inv" type="submit" value="Create Account"/>
                </div>
            </form>

        </>
    )

}

export default UserSignUpForm