import React, { useState } from 'react'

const UserSignUpForm = () => {

    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`A User tried creating an account with ${e.target.email.value} and ${e.target.password.value !== '' ? 'a password' : 'without a password'}`)
    }

    return (
        <>

            <h1>Ready to Get Started?</h1>

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
                    <input className="btn cta-btn-inv" type="submit" value="Create Account"/>
                </div>
            </form>

        </>
    )

}

export default UserSignUpForm