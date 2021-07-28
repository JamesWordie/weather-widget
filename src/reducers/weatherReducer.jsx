import { WEATHER } from '../actions/index';

const weatherReducer  = (state = {}, action) => {
  switch (action.type) {
    case WEATHER:
      return action.payload;
    default:
      return state;
  }
}

export default weatherReducer;
