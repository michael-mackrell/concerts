import { combineReducers } from 'redux';
import {showAddReducer, showGetReducer, deleteShowReducer} from './showReducer';

export default combineReducers({

    listOfShows: showAddReducer
});