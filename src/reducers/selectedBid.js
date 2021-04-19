const selectedBidReducer = ( state = null, action) => {
    switch(action.type) {
        case 'SET_SELECTED_BID':
            return state = action.bidPayload;
        default:
            return state;
    }
}

export default selectedBidReducer