import React from 'react'

//components
import SmallBidResponseCard from '../components/SmallBidResponseCard'

const ResponsesContainer = ({ responses }) => {

    return (
        <>
                <h3>Responses</h3>
                { responses.length > 0 ? <div>{responses.map((response, idx) => <SmallBidResponseCard response={ response } key={ idx } /> ) }</div> : <p>There are not responses available at the moment.</p> }
        </>
    )

}

export default ResponsesContainer