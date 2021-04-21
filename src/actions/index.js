export const setAccountType = (accountType=null) => {
    return {
        type: 'SET_ACCOUNT_TYPE',
        accountPayload: accountType
    }
}

export const setActivity = (activity=null) => {
    return {
        type: 'SET_ACTIVITY',
        activityPayload: activity
    }
}

export const setProfile = (profObj=null) => {
    return {
        type: 'SET_PROFILE',
        profilePayload: profObj
    }
}

export const setBid = (bid=null) => {
    return {
        type: 'SET_SELECTED_BID',
        bidPayload: bid
    }
}

export const setResponse = (response=null) => {
    return {
        type: 'SET_SELECTED_RESPONSE',
        responsePayload: response
    }
}

export const setExperience = (experience=null) => {
    return {
        type: 'SET_SELECTED_EXPERIENCE',
        experiencePayload: experience
    }
}