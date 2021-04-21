import React, { useState } from 'react'

// components
import SmallExperienceCard from '../components/SmallExperienceCard'

const UserExperiencesContainer = ({ experiences }) => {

    const [futureExperiences, setFutureExperiences] = useState(experiences.filter(exp => !exp.complete))
    const [pastExperiences, setPastExperiences] = useState(experiences.filter(exp => exp.complete))

    return (
        <>
            <div className="col-md-12">
                <h2 className="section-header">Experiences</h2>
            </div>
            <div className="sect-col col-md-6">
                <div>
                    <h1>Upcoming Experiences</h1>
                </div>
                <div>
                    { futureExperiences.length > 0 ? futureExperiences.map( (experience, idx) => <SmallExperienceCard experience={ experience } key={ idx } /> ) : <p>Looking for your next adventure? Click the "Make a Plan!" button below to get started!</p> }
                </div>
            </div>
            <div className="sect-col col-md-6">
                <div>
                    <h1>Past Experiences</h1>
                </div>
                <div>
                    { pastExperiences.length > 0 ? pastExperiences.map( (experience, idx) => <SmallExperienceCard experience={ experience } key={ idx } /> ) : <p>Looking for your next adventure? Click the "Make a Plan!" button below to get started!</p> }
                </div>
            </div>
        </>
    )

}

export default UserExperiencesContainer