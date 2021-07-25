import axios from 'axios';

export default axios.create({
  baseURL: 'http://open.mapquestapi.com/geocoding/v1',
  params: {
    key: process.env.REACT_APP_API_KEY_GEOCODE
  }
})
