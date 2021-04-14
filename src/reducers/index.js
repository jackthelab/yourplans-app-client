import isLoggedReducer from './isLogged';
import accountTypeReducer from './accountType'
import activityReducer from './activity'
import profileReducer from './profile'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    loggedIn: isLoggedReducer,
    accountType: accountTypeReducer,
    activityType: activityReducer,
    profile: profileReducer
})


export default rootReducer