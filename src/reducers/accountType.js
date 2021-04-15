const accountTypeReducer = (state = null, action) => {
    switch(action.type) {
        case 'SET_ACCOUNT_TYPE':
            return state = action.accountPayload
        // case 'USER':
        //     return state = "user";
        // case 'BUSINESS':
        //     return state = "business";
        // case 'RESET':
        //     return state = null;
        default:
            return state;
    }
}

export default accountTypeReducer