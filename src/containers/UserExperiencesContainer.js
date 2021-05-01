import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ExperienceCardFull from '../components/ExperienceCardFull'

// components
import SmallExperienceCard from '../components/SmallExperienceCard'

const UserExperiencesContainer = () => {

    const experiences = useSelector(state => state.experiencesList)
    const selectedExperience = useSelector(state => state.selectedExperience)

    // const [futureExperiences, setFutureExperiences] = useState(experiences.filter(exp => !exp.complete))
    // const [pastExperiences, setPastExperiences] = useState(experiences.filter(exp => exp.complete))

    return (
        <>
            <div className="col-md-12">
                <h2 className="section-header">Experiences</h2>
            </div>
            <div className="sect-col col-md-6">
                <div>
                    <h1>{ selectedExperience ? "Details View" : "Upcoming Experiences" }</h1>
                </div>
                <div>
                    {/* { futureExperiences.length > 0 ? futureExperiences.map( (experience, idx) => <SmallExperienceCard experience={ experience } key={ idx } /> ) : <p>Looking for your next adventure? Click the "Make a Plan!" button below to get started!</p> } */}
                    {/* { selectedExperience ? <SmallExperienceCard experience={ selectedExperience } /> : null }
                    { experiences && !selectedExperience ? experiences.filter( exp => !exp.complete ).map( (experience, idx) => <SmallExperienceCard experience={ experience } key={ idx } /> ) : <p>Looking for you your next adventure? Click the "Make a Plan!" button below to get started!</p> } */}
                    {/* { console.log(experiences.filter(exp => !exp.complete)) } */}
                { experiences ? selectedExperience ? <ExperienceCardFull experience={ selectedExperience } /> : experiences.filter( exp => !exp.complete ).map( (experience, idx) => <SmallExperienceCard experience={ experience } key={ idx } /> ) : <p>Looking for you your next adventure? Click the "Make a Plan!" button below to get started!</p> }
                </div>
            </div>
            <div className="sect-col col-md-6">
                <div>
                    <h1>Past Experiences</h1>
                </div>
                <div>
                    {/* { pastExperiences.length > 0 ? pastExperiences.map( (experience, idx) => <SmallExperienceCard experience={ experience } key={ idx } /> ) : <p>Looking for your next adventure? Click the "Make a Plan!" button below to get started!</p> } */}
                    { experiences ? experiences.filter( exp => exp.complete ).map( (experience, idx) => <SmallExperienceCard experience={ experience } key={ idx } /> ) : <p>Looking for you your next adventure? Click the "Make a Plan!" button below to get started!</p> }
                </div>
            </div>
        </>
    )

}

export default UserExperiencesContainer