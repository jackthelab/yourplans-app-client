import accountTypeReducer from './accountType'
import activityReducer from './activity'
import profileReducer from './profile'
import selectedBidReducer from './selectedBid'
import selectedResponseReducer from './selectedResponse'
import selectedExperienceReducer from './selectedExperience'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    accountType: accountTypeReducer,
    activity: activityReducer,
    profile: profileReducer,
    selectedBid: selectedBidReducer,
    selectedResponse: selectedResponseReducer,
    selectedExperience: selectedExperienceReducer
})


export default rootReducer