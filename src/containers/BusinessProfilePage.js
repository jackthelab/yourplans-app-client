import React from 'react'
import { useSelector } from 'react-redux';
// import { setActivity } from '../actions/index'

//containers
import BusinessProfileHome from './BusinessProfileHome'

const BusinessProfilePage = () => {

    const activityType = useSelector(state => state.activity)
    // const dispatch = useDispatch()
    const profileDetails = useSelector(state => state.profile)

    return (

        <div className="container" style={{ height: "auto" }}>

            <div className="row">
                <h1>{`Welcome, ${profileDetails.name}`}</h1>
            </div>
            <div className="row">
                { activityType !== "bidResponse" ? <BusinessProfileHome /> : null }
            </div>

        </div>

    )

}

export default BusinessProfilePage