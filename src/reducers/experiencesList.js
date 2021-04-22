const experiencesListReducer = (state=[], action) => {
    switch(action.type) {
        case 'SET_EXPERIENCES_LIST':
            return state = action.experiencesListPayload
        default:
            return state
    }
}

export default experiencesListReducer