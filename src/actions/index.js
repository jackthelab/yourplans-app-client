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

export const setOpenBidsList = (bidsList=[]) => {
    return {
        type: 'SET_OPEN_BIDS_LIST',
        bidsListPayload: bidsList
    }
}

export const setPendingResponsesList = (responsesList=[]) => {
    return {
        type: 'SET_PENDING_RESPONSES_LIST',
        pendingResponsesListPayload: responsesList
    }
}

export const setExperiencesList = (experiencesList=[]) => {
    return {
        type: 'SET_EXPERIENCES_LIST',
        experiencesListPayload: experiencesList
    }
}