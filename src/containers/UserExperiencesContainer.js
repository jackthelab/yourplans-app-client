import React from 'react'

const UserExperiencesContainer = ({ experiences }) => {

    return (
        <>

            <div className="row">
                <h1>Experiences</h1>
            </div>

            <div className="row">
                <h3>{`No. of Experiences: ${experiences.length}`}</h3>
            </div>

        </>
    )

}

export default UserExperiencesContainer