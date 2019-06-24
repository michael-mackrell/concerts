let showId = 0;

export const addShow = (showName, venue, date, time, details) => {
    let showObject= {
        showName,
        venue,
        date,
        time,
        details,
        showId
    };
    showId++;
    return {
        type: 'ADD_SHOW',
        payload: showObject
    };
}

export const updateShow = (showName, date, time, venue, details, passedShowId) => {
    let showObject= {
        showName,
        venue,
        date,
        time, 
        details,
        passedShowId
    };
    return {
        type: 'UPDATE_SHOW',
        payload: showObject
    };
}

export const getShows = () => {
    return {
        type: 'GET_SHOWS'
    };
}

export const deleteShow = (deleteThisOne) => {
    return {
        type: 'DELETE_SHOW',
        payload: deleteThisOne
    };
}

export const selectSpecificShow = (id) => {
    return {
        type: 'SELECT_SHOW',
        payload: id
    };
}