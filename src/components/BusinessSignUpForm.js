import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setProfile } from '../actions/index'

const BusinessSignUpForm = () => {

    const [inputName, setInputName] = useState('')
    const [inputStreetAdress, setInputStreetAddress] = useState('')
    const [inputCity, setInputCity] = useState('')
    const [inputState, setInputState] = useState('')
    const [inputPhone, setInputPhone] = useState('')
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
                    name: inputName,
                    street_address: inputStreetAdress,
                    city: inputCity,
                    state: inputState,
                    phone: inputPhone,
                    email: inputEmail,
                    password: inputPassword
                }
            })
        }
    
        fetch('http://localhost:3000/api/v1/businesses', reqObj)
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
        <div>

            <h1>Ready to Engage Future Customers?</h1>

            <form onSubmit={(e) => handleSubmit(e)}>

                <div>
                    <label>Name</label>
                </div>
                <div>
                    <input name="name" onChange={(e) => setInputName(e.target.value)} />
                </div>

                <div>
                    <label>Street Address</label>
                </div>
                <div>
                    <input name="street_address" onChange={(e) => setInputStreetAddress(e.target.value)} />
                </div>

                <div>
                    <label>City</label>
                </div>
                <div>
                    <input name="city" onChange={(e) => setInputCity(e.target.value)} />
                </div>

                <div>
                    <label>State</label>
                </div>
                <div>
                    <select name="state" onChange={(e) => setInputState(e.target.value)}>
                        <option value="">--Choose A State--</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NB">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>

                <div>
                    <label>Phone Number</label>
                </div>
                <div>
                    <input name="phone" onChange={(e) => setInputPhone(e.target.value)} />
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

        </div>
    )

}

export default BusinessSignUpForm