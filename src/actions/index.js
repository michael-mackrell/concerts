let showId = 0;

export const addShow = (showName, venue, date, time) => {
    let showObject= {
        showName,
        venue,
        date,
        time,
        showId
    };
    showId++;
    return {
        type: 'ADD_SHOW',
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