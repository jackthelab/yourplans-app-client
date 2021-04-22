import React from 'react'

// components
import SelectExperienceButton from './SelectExperienceButton'

const SmallExperienceCard = ({ experience, key }) => {

    return (

        <div key={ key } className="col-md-8 sm-exp-card">
            <h6>{ experience.bid ? experience.bid.name : null }</h6>
            <p>{ experience.bid ? `Under Budget: $${ experience.bid.budget - experience.bid_response.price } ( ${ (experience.bid.budget - experience.bid_response.price) / experience.bid.budget * 100 }% )` : null }</p>
            <p>{ experience.bid ? `Category: ${ experience.bid_response.category }` : null }</p>
            <p>{ experience.bid ? `Date (YYYY-MM-DD): ${ experience.bid.date }` : null }</p>
            <p>{ experience.bid ? `${ experience.bid_response.business.street_address } ${ experience.bid_response.business.city }, ${ experience.bid_response.business.state }` : <h1>Your New Experience was just created!</h1> }</p>
            {/* { !experience.complete ? <SelectExperienceButton experience={ experience } /> : <button className="btn cta-btn">Review</button> } */}
        </div>

    )

}

export default SmallExperienceCard