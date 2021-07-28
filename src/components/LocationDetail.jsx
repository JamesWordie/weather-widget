import React from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';

class LocationDetail extends React.Component {
  render() {
    const { location } = this.props.location;

    if (location === 'Edinburgh') {
      return (
        <Loading />
      );
    }

    const locationResult = this.props.location;
    return (
      <div className="col-md-4 my-5">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{locationResult.adminArea4}</h4>
            <h6 className="card-subtitle text-muted">{locationResult.adminArea1}</h6>
            <span className="coords d-inline-flex">
              <p className="me-2">Lat: {locationResult.latLng.lat}</p>
              <p className="me-2">Long: {locationResult.latLng.lng}</p>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { location: state.location }
}

export default connect(mapStateToProps, {})(LocationDetail);
