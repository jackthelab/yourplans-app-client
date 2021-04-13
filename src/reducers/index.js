import isLoggedReducer from './isLogged';
import accountTypeReducer from './accountType'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    loggedIn: isLoggedReducer,
    accountType: accountTypeReducer
})


export default rootReducer