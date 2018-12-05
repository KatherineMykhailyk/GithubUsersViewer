import {combineReducers} from 'redux';
import {SELECT_LANGUAGE, INVALIDATE_LANGUAGE, REQUEST_USERS, RECEIVE_USERS} from '../constants/index';

function selectedLanguage(state = "javascript", action) {
    switch (action.type) {
        case SELECT_LANGUAGE:
            return action.language;
        default:
            return state;
    }
}

function users(state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    }, action) {
    switch (action.type) {
        case INVALIDATE_LANGUAGE:
            return Object.assign({}, state, {
                didInvalidate: true
            });

        case REQUEST_USERS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });

        case RECEIVE_USERS:
            return Object.assign ( {}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.users,
                lastUpdated: action.receivedAt
            });

        default: return state
    }
}

function usersFromGithub(state = {}, action) {
    switch (action.type) {
        case INVALIDATE_LANGUAGE:
        case REQUEST_USERS:
        case RECEIVE_USERS:
            return Object.assign({}, state, {
                [action.language]: users(state[action.language], action)
            });
        default:
            return state;
    }
}

export default combineReducers({
    selectedLanguage, usersFromGithub
})