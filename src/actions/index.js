export const setAccountType = (accountType) => {
    return {
        type: 'SET_ACCOUNT_TYPE',
        accountPayload: accountType
    }
}

export const setActivity = (activity) => {
    return {
        type: 'SET_ACTIVITY',
        activityPayload: activity
    }
}

export const setProfile = (profObj) => {
    return {
        type: 'SET_PROFILE',
        profilePayload: profObj
    }
}