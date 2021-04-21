import React from 'react'
import { useDispatch } from 'react-redux'
import { setExperience } from '../actions/index'

const SelectExperienceButton = ({ experience }) => {

    const dispatch = useDispatch()

    return (

        <button onClick={() => dispatch(setExperience(experience))} className="btn cta-btn">Details</button>

    )

}

export default SelectExperienceButton