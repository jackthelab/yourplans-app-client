import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const BidResponseForm = () => {

    const currentBusiness = useSelector(state => state.profile)
    const selectedBid = useSelector(state => state.selectedBid)

    const [price, setPrice] = useState(null)
    const [category, setCategory] = useState(null)
    const [details, setDetails] = useState(null)

    const handleSubmit = (e) => {

        e.preventDefault()

        const reqObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
               bid_response: {
                   business_id: currentBusiness.id,
                   bid_id: selectedBid.id,
                   price: price,
                   category: category,
                   details: details
               } 
            })
        }

        // console.log(reqObj)

        fetch(`http://localhost:3000/api/v1/businesses/${currentBusiness.id}/bid_responses`, reqObj)
            .then(res => res.json())
            .then(brData => {
                e.target.reset()
            })

    }

    return (

        <>
            <div className="row">
                <h1>Tell Us About What You Need</h1>
            </div>

            <div className="row">
                <form onSubmit={(e) => handleSubmit(e)}>
              
                    <div>
                        <label>Price ($)</label>
                    </div>
                    <div>
                        <input type="number" min="0" max={selectedBid.budget} step="5" onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div>
                        <label>Category</label>                    
                    </div>
                    <div>
                        <select onChange={(e) => setCategory(e.target.value)}>
                            <option value="Dining">Dining</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Outdoors">Outdoors</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Other">Adventure</option>
                        </select>
                    </div> 
                    <div>
                        <label>Details</label>
                    </div>
                    <div>
                        <input type="textarea" onChange={ (e) => setDetails(e.target.value) } />
                    </div>
                    <div className="submit-btn">
                        <input className="btn cta-btn-inv" type="submit" value="Create Activity"/>
                    </div>

                </form>
            </div>
        </>

    )

}

export default BidResponseForm