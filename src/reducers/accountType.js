const accountTypeReducer = (state = null, action) => {
    switch(action.type) {
        case 'USER':
            return state = "user";
        case 'BUSINESS':
            return state = "business";
        case 'RESET':
            return state = null;
        default:
            return state = null;
    }
}

export default accountTypeReducer