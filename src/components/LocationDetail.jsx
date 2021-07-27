import React from 'react';
import { connect } from 'react-redux';
import { geocodeSearch } from '../actions';
import Loading from './Loading';

class LocationDetail extends React.Component {
  render() {
    const { location } = this.props.location;

    if (location === 'Edinburgh') {
      return (
        <Loading />
      );
    }
    return (
      <div className="row">
        <div className="col-md-4 my-5">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">{location.adminArea4}</h4>
              <h6 className="card-subtitle text-muted">{location.adminArea1}</h6>
              <span className="coords d-inline-flex">
                <p className="me-2">Lat: {location.latLng.lat}</p>
                <p className="me-2">Long: {location.latLng.lng}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { location: state.geocode }
}

export default connect(mapStateToProps, { geocodeSearch })(LocationDetail);
