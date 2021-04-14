// export const logIn = () => {
//     return {
//         type: 'SIGN_IN'
//     }
// }

//account type actions

export const setUserType = () => {
    return {
        type: 'USER'
    }
}

export const setBusinessType = () => {
    return {
        type: 'BUSINESS'
    }
}

export const resetAccountType = () => {
    return {
        type: 'RESET'
    }
}

// activity actions

// export const resetActivity = () => {
//     return {
//         type: 'RESET'
//     }
// }
// 
// export const loginActivity = () => {
//     return {
//         type: 'LOGIN'
//     }
// }

// export const createBid = () => {
//     return {
//         type: 'CREATE_BID'
//     }
// }

// profile actions

export const setProfile = (profObj) => {
    return {
        type: 'SET_PROFILE',
        profilePayload: profObj
    }
}

// export const resetProfile = () => {
//     return {
//         type: 'RESET_PROFILE'
//     }
// }