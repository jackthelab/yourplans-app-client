import isLoggedReducer from './isLogged';
import accountTypeReducer from './accountType'
import activityReducer from './activity'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    loggedIn: isLoggedReducer,
    accountType: accountTypeReducer,
    activityType: activityReducer
})


export default rootReducer