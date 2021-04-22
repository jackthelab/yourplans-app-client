import React from 'react'
import { useDispatch } from 'react-redux'
import { setResponse } from '../actions/index'

const SelectResponseButton = ({ response }) => {

    const dispatch = useDispatch()

    const handleClick = () => {
        // console.log(response)
        dispatch(setResponse(response))
    }

    return (
        <button onClick={handleClick} className="btn cta-btn">Select</button>
    )

}

export default SelectResponseButton