import accountTypeReducer from './accountType'
import activityReducer from './activity'
import profileReducer from './profile'
import selectedBidReducer from './selectedBid'
import selectedResponseReducer from './selectedResponse'
import selectedExperienceReducer from './selectedExperience'
import openBidsListReducer from './openBidsList'
import pendingResponsesListReducer from './pendingResponsesList'
import experiencesListReducer from './experiencesList'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    accountType: accountTypeReducer,
    activity: activityReducer,
    profile: profileReducer,
    selectedBid: selectedBidReducer,
    selectedResponse: selectedResponseReducer,
    selectedExperience: selectedExperienceReducer,
    openBidsList: openBidsListReducer,
    pendingResponsesList: pendingResponsesListReducer,
    experiencesList: experiencesListReducer
})


export default rootReducer