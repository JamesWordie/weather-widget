import React from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import { connect } from 'react-redux';
import Loading from './Loading';


export const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_API_KEY_MAPBOX
})

class Mapbox extends React.Component {
  render() {
    let { lat } = this.props.coords;
    let { lon } = this.props.coords;

    if (this.props.coords.location === 'Edinburgh') {
      return null;
    }
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '250px',
          width: '100%'
        }}
        center={[lon, lat]}
      >
        <Marker
          anchor='center'
          coordinates={[lon, lat]}
        >
          <i className="fas fa-map-marker-alt text-danger" style={{ fontSize: '24px' }}></i>
        </Marker>
      </Map>
    );
  }
}

const mapStateToProps = state => {
  return { coords: state.weather }
}

export default connect(mapStateToProps, {})(Mapbox);
