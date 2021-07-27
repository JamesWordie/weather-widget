import geocode from '../api/geocode';
export const GEOCODE = 'GEOCODE';

export const geocodeSearch = ({ location }) => async dispatch => {
  const response = await geocode.get('/address', {
    params: {
      location
    }
  });

  const result = response.data.results[0].locations[0]

  dispatch({ type: GEOCODE, payload: result })
}
