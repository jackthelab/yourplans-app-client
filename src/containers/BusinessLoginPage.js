import React from 'react'

//components
import BusinessLoginForm from '../components/BusinessLoginForm'
import BusinessSignUpForm from '../components/BusinessSignUpForm'

const BusinessLoginPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="sect-col col-md-6">
                    <BusinessLoginForm />
                </div>
                <div className="sect-col col-md-6">
                    <BusinessSignUpForm />
                </div>
            </div>
        </div>
    )
}

export default BusinessLoginPage