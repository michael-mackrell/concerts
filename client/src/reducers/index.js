import { combineReducers } from 'redux';
import {showAddReducer, deleteShowReducer} from './showReducer';

export default combineReducers({

    showData: showAddReducer
});