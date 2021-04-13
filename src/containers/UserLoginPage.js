import React from 'react'

//components
import UserLoginForm from '../components/UserLoginForm'
import UserSignUpForm from '../components/UserSignUpForm'

const UserLoginPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="sect-col col-md-6 overflow-auto">
                    <UserLoginForm />
                </div>
                <div className="sect-col col-md-6 overflow-auto">
                    <UserSignUpForm />
                </div>
            </div>
        </div>
    )
}

export default UserLoginPage