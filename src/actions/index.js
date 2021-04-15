// export const logIn = () => {
//     return {
//         type: 'SIGN_IN'
//     }
// }

//account type actions

// export const setUserType = () => {
//     return {
//         type: 'USER'
//     }
// }

// export const setBusinessType = () => {
//     return {
//         type: 'BUSINESS'
//     }
// }

export const setAccountType = (accountType) => {
    return {
        type: 'SET_ACCOUNT_TYPE',
        accountPayload: accountType
    }
}

// export const resetAccountType = () => {
//     return {
//         type: 'RESET'
//     }
// }

// activity actions

// export const resetActivity = () => {
//     return {
//         type: 'RESET'
//     }
// }

export const setActivity = (activity) => {
    return {
        type: 'SET_ACTIVITY',
        activityPayload: activity
    }
}

// export const createBid = () => {
//     return {
//         type: 'CREATE_BID'
//     }
// }

// export const bidResponse = () => {
//     return {
//         type: 'BID_RESPONSE'
//     }
// }

// profile actions

export const setProfile = (profObj) => {
    return {
        type: 'SET_PROFILE',
        profilePayload: profObj
    }
}