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

export const updateShow = (name, date, time, venue, details, id) => dispatch => {
    let showObject= {
        name,
        venue,
        date,
        time, 
        details,
        id
    };

    axios.put('/api/concerts', showObject).then(res =>{
        dispatch({
          type: 'UPDATE_SHOW',
          payload: showObject
        })}
      );
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
    return {
        type: 'SELECT_SHOW',
        payload: id
    };
}