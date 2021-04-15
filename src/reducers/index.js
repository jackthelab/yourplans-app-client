import accountTypeReducer from './accountType'
import activityReducer from './activity'
import profileReducer from './profile'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    accountType: accountTypeReducer,
    activity: activityReducer,
    profile: profileReducer
})


export default rootReducer