const profileReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_PROFILE':
            return state = action.profilePayload;
        default:
            return state;
    }
}

export default profileReducer