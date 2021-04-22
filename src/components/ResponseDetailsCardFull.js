import React from 'react'
import { useSelector } from 'react-redux'

const ResponseDetailsCardFull = ({ response }) => {

    const accountType = useSelector(state => state.accountType)
    const profile = useSelector(state => state.profile)

    return (
        <div className="full-bid-card">
            <h5>{ accountType === 'user' ? response.business.name : profile.name }</h5>
            <hr></hr>
            { accountType === 'business' ? <h6>Bid Name</h6> : null }
            { accountType === 'business' ? <p>{ response.bid.name }</p> : null }
            <h6>Price</h6>
            <p>{ `$${response.price}` }</p>
            <h6>Category</h6>
            <p>{ `${response.category}` }</p>
            <h6>What?</h6>
            <p>{ `${response.details}` }</p>
            <h6>Who?</h6>
            <div>
                <div>
                    <a className="btn cta-btn social-link-btn" href={`${ accountType === 'user' ? response.business.website : profile.website }`}>Web</a>
                </div>
                <div>
                    <a className="btn cta-btn social-link-btn" href={`${ accountType === 'user' ? response.business.facebook : profile.facebook }`}>"The Book"</a>
                </div>
                <div>
                    <a className="btn cta-btn social-link-btn" href={`${ accountType === 'user' ? response.business.instagram : profile.instagram }`}>"The Gram"</a>
                </div>
                <div>
                    <p>{`Bio: ${ accountType === 'user' ? response.business.bio : profile.bio}`}</p>
                </div>
            </div>
            <h6>Where?</h6>
            <p>{`${ accountType === 'user' ? response.business.street_address : profile.street_address } ${ accountType === 'user' ? response.business.city : profile.city }, ${ accountType === 'user' ? response.business.state : profile.state }`}</p>
        </div>
    )

}

export default ResponseDetailsCardFull