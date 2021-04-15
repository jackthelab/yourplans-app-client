import React from 'react';
import { useSelector } from 'react-redux';

const UserProfileHome = () => {

    const profileDetails = useSelector(state => state.profile)

    return (
        <h1>{`Welcome to your personal account, ${profileDetails.first_name}!`}</h1>
    )

}

export default UserProfileHome