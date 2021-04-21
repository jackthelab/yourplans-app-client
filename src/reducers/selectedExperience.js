const selectedExperienceReducer = (state=null, action) => {
    switch(action.type) {
        case 'SET_SELECTED_EXPERIENCE':
            return state = action.experiencePayload;
        default:
            return state;
    }
}

export default selectedExperienceReducer