import accountTypeReducer from './accountType'
import activityReducer from './activity'
import profileReducer from './profile'
import selectedBidReducer from './selectedBid'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    accountType: accountTypeReducer,
    activity: activityReducer,
    profile: profileReducer,
    selectedBid: selectedBidReducer
})


export default rootReducer