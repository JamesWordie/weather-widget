import { combineReducers } from 'redux';
import geocodeReducer from './geocodeReducer';
import weatherReducer from './weatherReducer';

export default combineReducers({
  location: geocodeReducer,
  weather: weatherReducer
});
