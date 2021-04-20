import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setResponse, setBid, setActivity } from '../actions/index'

const AwardDecisionButtons = () => {

    const selectedBid = useSelector(state => state.selectedBid)
    const selectedResponse = useSelector(state => state.selectedResponse)

    const dispatch = useDispatch()

    const baseURL = 'http://localhost:3000/api/v1/'

    const award = () => {

        const reqObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                experience: {
                    bid_id: selectedBid.id,
                    bid_response_id: selectedResponse.id,
                    complete: false   
                }
            })
        }

        fetch(`${baseURL}experiences`, reqObj)
            .then(res => res.json())
            .then(expData => {
                console.log(expData)
                dispatch(setResponse())
                dispatch(setBid())
                dispatch(setActivity())
            })

        closeBid()

    }

    const cancel = () => {

        dispatch(setResponse())

    }

    const closeBid = () => {
        
        const reqObj = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.token}`
            },
            method: "PATCH",
            body: JSON.stringify({
                bid: {
                    open_status: false 
                }
            })
        }

        fetch(`${baseURL}bids/${selectedBid.id}`, reqObj)
            .then(res => res.json())
            .then(bidData => {
                console.log(bidData)
                dispatch(setBid())
                dispatch(setActivity())
            })

    }

    return (
        <>
            { selectedResponse ?
                <div>
                    <button onClick={ award } className="col-md-6 btn cta-btn-inv">Award</button>
                    <button onClick={ cancel } className="col-md-6 btn btn-danger cta-btn-inv">Cancel</button>
                </div>
                : 
                <div>
                    <button onClick={ closeBid } className="col-md-12 btn btn-danger cta-btn-inv">No Award/Delete Bid</button>
                </div> }
        </>
    )

}

export default AwardDecisionButtons