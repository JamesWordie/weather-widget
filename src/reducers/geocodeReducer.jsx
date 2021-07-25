import { GEOCODE } from '../actions/index';

const INITIAL_SEARCH = {
  location: 'Edinburgh'
}

const geocodeReducer  =(state = INITIAL_SEARCH, action) => {
  switch (action.type) {
    case GEOCODE:
      return { ...state, location: action.payload};
    default:
      return state;
  }
}

export default geocodeReducer;
