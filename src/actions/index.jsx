import geocode from '../api/geocode';
import weather from '../api/weather';
export const GEOCODE = 'GEOCODE';
export const WEATHER = 'WEATHER';

export const fetchGeocodeAndWeather = ({ location }) => async (dispatch, getState) => {
  await dispatch(geocodeSearch(location));

  const { lat } = getState().location.latLng;
  const { lng } = getState().location.latLng;

  await dispatch(weatherSearch(lat, lng));
}

export const geocodeSearch = (location) => async dispatch => {
  const response = await geocode.get('/address', {
    params: {
      location
    }
  });

  const result = response.data.results[0].locations[0]

  dispatch({ type: GEOCODE, payload: result })
}

export const weatherSearch = (lat, long) => async dispatch => {
  const response = await weather.get('/onecall', {
    params: {
      lat,
      lon: long,
      // come back to at later date and add in checkbox for hourly/daily, etc
      exclude: 'hourly,minutely',
      units: 'metric'
    }
  });

  const result = response.data;

  dispatch({ type: WEATHER, payload: result })
}
