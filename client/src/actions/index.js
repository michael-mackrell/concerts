import axios from 'axios';

let showId = 0;


export const getShows = () => dispatch => {
    axios.get('/api/concerts').then(res =>{
        dispatch({
          type: 'GET_SHOWS',
          payload: res.data
        })}
    );  
}



export const addShow = (showName, venue, date, time, details) => dispatch => {
    let showObject= {
        showName,
        venue,
        date,
        time,
        details,
        showId
    };
    showId++;
    axios.post('/api/concerts', showObject).then(res =>{
        dispatch({
          type: 'ADD_SHOW',
          payload: res.data
        })}
      );
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

export const deleteShow = (deleteThisOne) => dispatch =>{

    axios.delete(`/api/concerts/delete/${deleteThisOne}`, {deleteThisOne}).then(res =>{
        dispatch({
          type: 'DELETE_SHOW',
          payload: res.data
        })}
      );
}



export const selectSpecificShow = (id) => {
    console.log(id)
    return {
        type: 'SELECT_SHOW',
        payload: id
    };
}