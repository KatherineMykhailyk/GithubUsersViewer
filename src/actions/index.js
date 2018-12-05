import getPopularUsersByLanguage from '../api';

import {SELECT_LANGUAGE, INVALIDATE_LANGUAGE, REQUEST_USERS, RECEIVE_USERS} from "../constants/index";

export const selectLanguage = language => ({
    type: SELECT_LANGUAGE,
    language
});

export const invalidateLanguage = language => ({
    type: INVALIDATE_LANGUAGE,
    language
});

export const requestUsers = language => ({
    type: REQUEST_USERS,
    language
});

export const receiveUsers = (language, data) => ({
    type: RECEIVE_USERS,
    language,
    users: data.items,
    receivedAt: Date.now()
});

export const fetchUsers = language => dispatch => {
    dispatch(requestUsers(language));

    return getPopularUsersByLanguage(language)
        .then(data => dispatch(receiveUsers(language, data)))
};

export const shouldFetchUsers = (state, language) => {
    const users = state.usersFromGithub[language];
    if (!users) {
        return true
    } else if (users.isFetching) {
        return false
    } else {
        return users.didInvalidate
    }
};

export const fetchUsersIfNeeded = language => {
    return (dispatch, getState) => {
        if (shouldFetchUsers(getState(), language)) {
            return dispatch(fetchUsers(language))
        }
    }
};


