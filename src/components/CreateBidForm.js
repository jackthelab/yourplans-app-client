import React, { useState } from 'react'

const CreateBidForm = () => {

    const [inputName, setInputName] = useState('')
    const [inputNumberOfPeople, setInputNumberOfPeople] = useState(1)
    const [inputBudget, setInputBudget] = useState(20)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`A User tried creating an activity named ${inputName} for ${inputNumberOfPeople} people with a budget of $${inputBudget}`)
    }

    return (
        <>

            <h1>Tell Us A Bit About Your Activity Needs</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
            
                <div>
                    <label>Event Name (optional)</label>                    
                </div>
                <div>
                    <input type="text" name="name" onChange={(e) => setInputName(e.target.value)} />
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
                  
                <div className="submit-btn">
                    <input className="btn cta-btn-inv" type="submit" value="Create Activity"/>
                </div>
            </form>

        </>
    )

}

export default CreateBidForm