import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setActivity } from '../actions/index'

const CreateBidForm = () => {

    const [inputName, setInputName] = useState(null)
    const [inputCity, setInputCity] = useState(null)
    const [inputState, setInputState] = useState(null)
    const [inputNumberOfPeople, setInputNumberOfPeople] = useState(1)
    const [inputBudget, setInputBudget] = useState(20)
    const [inputNotes, setInputNotes] = useState(null)
    const [inputDate, setInputDate] = useState(new Date())

    const user = useSelector(state => state.profile)
    
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const reqObj = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`
            },
            method: "POST",
            body: JSON.stringify({
                bid: {
                    user_id: user.id,
                    name: inputName,
                    city: inputCity,
                    state: inputState,
                    num_in_party: inputNumberOfPeople,
                    budget: inputBudget,
                    notes: inputNotes,
                    open_status: true,
                    date: inputDate
                }
            })
        }

        fetch(`http://localhost:3000/api/v1/users/${user.id}/bids`, reqObj)
            .then(res => res.json())
            .then(resData => {
                console.log(resData)
                dispatch(setActivity(null))
            })
    }

    const minDate = () => {
        const dateObj = new Date()
        const dateArr = dateObj.toString().split(' ')
        let month = null
        let day = dateArr[2]
        let year = dateArr[3]

        if(dateArr[1] === "Jan"){
            month = "01"
        } else if(dateArr[1] === "Feb"){
            month = "02"
        } else if(dateArr[1] === "Mar"){
            month = "03"
        } else if(dateArr[1] === "Apr"){
            month = "04"
        } else if(dateArr[1] === "May"){
            month = "05"
        } else if(dateArr[1] === "Jun"){
            month = "06"
        } else if(dateArr[1] === "Jul"){
            month = "07"
        } else if(dateArr[1] === "Aug"){
            month = "08"
        } else if(dateArr[1] === "Sep"){
            month = "09"
        } else if(dateArr[1] === "Oct"){
            month = "10"
        } else if(dateArr[1] === "Nov"){
            month = "11"
        } else if(dateArr[1] === "Dec"){
            month = "12"
        }

        return `${year}-${month}-${day}`

    }

    return (
        <div className="col-md-12 sect-col">

            <h1>Tell Us About What You Need</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
            
                <div>
                    <label>Event Name (optional)</label>                    
                </div>
                <div>
                    <input type="text" name="name" onChange={(e) => setInputName(e.target.value)} />
                </div>
                <div>
                    <label>City</label>
                </div>
                <div>
                    <input type="text" name="city" onChange={(e) => setInputCity(e.target.value)} />
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
                    <label>Number of People</label>
                </div>
                <div>
                    <input type="number" min="1" value={inputNumberOfPeople} name="number_of_people" onChange={(e) => setInputNumberOfPeople(e.target.value)} />
                </div>
                <div>
                    <label>Budget (in $)</label>
                </div>
                <div>
                    <input type="number" value={inputBudget} min="20" step="10" name="budget" onChange={(e) => setInputBudget(e.target.value)} />
                </div>
                <div>
                    <label>Notes (Allergies, Any Restrictions, etc.)</label>
                </div>
                <div>
                    <input type="textarea" onChange={ (e) => setInputNotes(e.target.value) } />
                </div>
                <div>
                    <label>Date</label>
                </div>
                <div>
                    <input type="date" min={minDate()} value={inputDate} onChange={(e) => { setInputDate(e.target.value) }} />
                </div>
                <div className="submit-btn">
                    <input className="btn cta-btn-inv" type="submit" value="Create Activity"/>
                </div>

            </form>

        </div>
    )

}

export default CreateBidForm