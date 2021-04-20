const selectedResponseReducer = ( state = null, action ) => {
    switch(action.type){
        case 'SET_SELECTED_RESPONSE':
            return state = action.responsePayload;
        default:
            return state;
    }
}

export default selectedResponseReducer