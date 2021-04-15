const accountTypeReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_ACCOUNT_TYPE':
            return state = action.accountPayload
        default:
            return state;
    }
}

export default accountTypeReducer