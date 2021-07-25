import geocode from '../api/geocode';
export const GEOCODE = 'GEOCODE';

export const geocodeSearch = (formValues, location) => async dispatch => {
  const response = await geocode.get('/address', {
    params: {
      location
    }
  });

  dispatch({ type: GEOCODE, payload: response.data })
}
