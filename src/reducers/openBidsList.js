const openBidsListReducer = (state=[], action) => {
    switch(action.type) {
        case 'SET_OPEN_BIDS_LIST':
            return state = action.bidsListPayload
        default:
            return state
    }
}

export default openBidsListReducer