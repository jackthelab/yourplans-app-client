const activityReducer = ( state = null, action) => {
    switch(action.type) {
        case 'SET_ACTIVITY':
            return state = action.activityPayload;
        default:
            return state;
    }
}

export default activityReducer