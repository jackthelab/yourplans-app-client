import React from 'react'

// components
import SelectExperienceButton from './SelectExperienceButton'

const SmallExperienceCard = ({ experience, key }) => {

    return (

        <div key={ key } className="col-md-8 sm-exp-card">
            <h6>{ experience.bid.name }</h6>
            <p>{ `Under Budget: $${ experience.bid.budget - experience.bid_response.price } ( ${ (experience.bid.budget - experience.bid_response.price) / experience.bid.budget * 100 }% )` }</p>
            <p>{ `Category: ${ experience.bid_response.category }` }</p>
            <p>{ `Date (YYYY-MM-DD): ${ experience.bid.date }` }</p>
            <p>{ `${ experience.bid_response.business.street_address } ${ experience.bid_response.business.city }, ${ experience.bid_response.business.state }` }</p>
            {/* { !experience.complete ? <SelectExperienceButton experience={ experience } /> : <button className="btn cta-btn">Review</button> } */}
        </div>

    )

}

export default SmallExperienceCard