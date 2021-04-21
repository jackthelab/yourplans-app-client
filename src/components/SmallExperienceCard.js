import React from 'react'

const SmallExperienceCard = ({ experience, key }) => {

    return (

        <div key={ key } className="col-md-8 sm-exp-card">
            <h6>{ experience.bid.name }</h6>
            <p>{ `Under Budget: $${ experience.bid.budget - experience.bid_response.price } ( ${ (experience.bid.budget - experience.bid_response.price) / experience.bid.budget * 100 }% )` }</p>
            <p>{ `Category: ${ experience.bid_response.category }` }</p>
            <p>{ `Date (YYYY-MM-DD): ${ experience.bid.date }` }</p>
            <p>{ `${ experience.bid.city }, ${ experience.bid.state }` }</p>
            { !experience.complete ? <button className="btn cta-btn">Details</button> : <button className="btn cta-btn">Review</button> }
        </div>

    )

}

export default SmallExperienceCard