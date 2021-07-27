import React from 'react';
import { connect } from 'react-redux';
import { geocodeSearch } from '../actions';

class LocationDetail extends React.Component {
  render() {
    const { location } = this.props.location;

    if (location === 'Edinburgh') {
      return (
        <div className="row justify-content-center align-items-center my-5">
          <div className="col-6 text-center d-inline-flex justify-content-center align-items-center w-100">
            <span className="mx-4">Make your search now..</span>
            <div className="spinner-border text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
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
