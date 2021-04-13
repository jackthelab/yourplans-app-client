const activityReducer = ( state = null, action) => {
    switch(action.type) {
        case 'LOGIN':
            return state = "login";
        case 'CREATE_BID':
            return state = "createBid";
        case 'RESET':
            return state = null;
        default:
            return state;
    }
}

export default activityReducer