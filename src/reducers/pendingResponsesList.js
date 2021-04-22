const pendingResponsesListReducer = (state=[], action) => {
    switch(action.type) {
        case 'SET_PENDING_RESPONSES_LIST':
            return state = action.pendingResponsesListPayload
        default:
            return state
    }
}

export default pendingResponsesListReducer