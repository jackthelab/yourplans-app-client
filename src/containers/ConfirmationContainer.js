import React from 'react'
import { useSelector } from 'react-redux'

//components
import ResponseDetailsCardFull from '../components/ResponseDetailsCardFull'
import AwardDecisionButtons from '../components/AwardDecisionButtons'

const ConfirmationContainer = () => {

    const selectedResponse = useSelector(state => state.selectedResponse)

    return (

        <>
            <div className="row">
                <h3>Selected Response</h3>
            </div>
            <div className="row">
                { selectedResponse ? <ResponseDetailsCardFull response={ selectedResponse } /> : null }
            </div>
            <div>
                <AwardDecisionButtons />
            </div>
        </>

    )

}

export default ConfirmationContainer