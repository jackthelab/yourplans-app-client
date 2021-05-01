import React from 'react'

import SelectExperienceButton from './SelectExperienceButton'

const ExperienceCardFull = ({ experience }) => {

    return (

        <div className="col-md-8 full-exp-card">
            <h6>{ experience.bid.name }</h6>
            <p>{ `Under Budget: $${ experience.bid.budget - experience.bid_response.price } ( ${ (experience.bid.budget - experience.bid_response.price) / experience.bid.budget * 100 }% )` }</p>
            <p>{ `Category: ${ experience.bid_response.category }` }</p>
            <p>{ `Date (YYYY-MM-DD): ${ experience.bid.date }` }</p>
            <p>{ `${ experience.bid_response.business.street_address } ${ experience.bid_response.business.city }, ${ experience.bid_response.business.state }` }</p>
            <h6>Details</h6>
            <p>{ experience.bid_response.details }</p>
            <h6>Business</h6>
            <p>{ experience.bid_response.business.name }</p>
            <a className="btn cta-btn social-link-btn" href={ experience.bid_response.business.website } target='_blank'>{ `${experience.bid_response.business.name}'s Website` }</a>
            {/* { !experience.complete ? <SelectExperienceButton experience={ experience } /> : <button className="btn cta-btn">Review</button> } */}
            <div>
                <SelectExperienceButton experience={ null } />
            </div>
        </div>

    )

}

export default ExperienceCardFull