import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

const CreateBidForm = () => {

    const [inputName, setInputName] = useState(null)
    const [inputCity, setInputCity] = useState(null)
    const [inputState, setInputState] = useState(null)
    const [inputNumberOfPeople, setInputNumberOfPeople] = useState(1)
    const [inputBudget, setInputBudget] = useState(20)
    const [inputDate, setInputDate] = useState(new Date())
    
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`A User tried creating an activity named ${inputName} for ${inputNumberOfPeople} people with a budget of $${inputBudget}`)
    }

    return (
        <>

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
                    <input type="textarea"></input>
                </div>
                {/* <div>
                    <label>Date</label>
                </div>
                <div>
                    {/* <input type="date" min={new Date()} value={inputDate} onChange={(e) => setInputDate(e.target.value)} /> */}
                    {/* <DatePicker selected={inputDate} minDate={new Date()} onChange={date => setInputDate(date)} /> */}
                {/* </div> */}
                <div className="submit-btn">
                    <input className="btn cta-btn-inv" type="submit" value="Create Activity"/>
                </div>

            </form>

        </>
    )

}

export default CreateBidForm