const profileReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_PROFILE':
            return state = action.profilePayload;
        // case 'RESET_PROFILE':
        //     return state = null;
        default:
            return state;
    }
}

export default profileReducer