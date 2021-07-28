import { WEATHER } from '../actions/index';

const INITIAL_SEARCH = {
  location: 'Edinburgh'
}

const weatherReducer  = (state = INITIAL_SEARCH, action) => {
  switch (action.type) {
    case WEATHER:
      return action.payload;
    default:
      return state;
  }
}

export default weatherReducer;
