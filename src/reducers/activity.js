const activityReducer = ( state = null, action) => {
    switch(action.type) {
        case 'SET_ACTIVITY':
            return state = action.activityPayload;
        // case 'RESET_ACTIVITY':
        //     return state = null;
        default:
            return state;
    }
}

export default activityReducer