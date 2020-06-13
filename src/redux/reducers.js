import { combineReducers } from 'redux'
import {
    RECEIVE_REPORTS, REGION_FILTER, REQUEST_REPORTS
} from './actions'

function reports(
    state = {
        isFetching: false,
        items: []
    },
    action
) {
    switch (action.type) {
        case REQUEST_REPORTS:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_REPORTS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.reports,
            })
        default:
            return state
    }
}

function filter(state = "", action) {
    switch (action.type) {
        case REGION_FILTER:
            return action.filter
        default:
            return state
    }
}

const rootReducer = combineReducers({
    reports,
    filter
})

export default rootReducer