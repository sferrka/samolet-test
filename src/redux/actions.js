
export const REQUEST_REPORTS = 'REQUEST_REPORTS';
export const RECEIVE_REPORTS = 'RECEIVE_REPORTS';
export const REGION_FILTER = 'REGION_FILTER';

export function setFilter(filter) {
    return {
        type: REGION_FILTER,
        filter
    }
}

function requestReports() {
    return {
        type: REQUEST_REPORTS,
    }
}

function receiveReports(json) {
    return {
        type: RECEIVE_REPORTS,
        reports: json,
    }
}

function fetchReports() {
    return async dispatch => {
        dispatch(requestReports())
        const response = await fetch('opendata/7705851331-stat_library/data-2016-11-10T00-00-00-structure-2016-09-12T00-00-00.json');
        const json = await response.json();
        return dispatch(receiveReports(json));
    }
}

function shouldFetchReports(state) {
    return !state.reports.isFetching;
}

export function fetchReportsIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchReports(getState())) {
            return dispatch(fetchReports())
        }
    }
}