import { combineReducers } from 'redux';
import geocodeReducer from './geocodeReducer';

export default combineReducers({
  geocode: geocodeReducer
});
