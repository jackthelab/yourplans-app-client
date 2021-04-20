import React from 'react'

const ResponseDetailsCardFull = ({ response }) => {

    return (
        <div className="full-bid-card">
            <h5>{response.business.name}</h5>
            <hr></hr>
            <h6>Price</h6>
            <p>{`$${response.price}`}</p>
            <h6>Category</h6>
            <p>{`${response.category} people`}</p>
            <h6>What?</h6>
            <p>{`${response.details}`}</p>
            <h6>Who?</h6>
            <div>
                <div>
                    <a className="btn cta-btn social-link-btn" href={`${response.business.website}`}>Web</a>
                </div>
                <div>
                    <a className="btn cta-btn social-link-btn" href={`${response.business.facebook}`}>"The Book"</a>
                </div>
                <div>
                    <a className="btn cta-btn social-link-btn" href={`${response.business.instagram}`}>"The Gram"</a>
                </div>
                <div>
                    <p>{`Bio: ${response.business.bio}`}</p>
                </div>
            </div>
            <h6>Where?</h6>
            <p>{`${response.business.street_address} ${response.business.city}, ${response.business.state}`}</p>
        </div>
    )

}

export default ResponseDetailsCardFull