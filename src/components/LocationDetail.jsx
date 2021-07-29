import React from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';
import Mapbox from './Mapbox';
// import Clock from './Clock';
import ReactClock from './ReactClock';

class LocationDetail extends React.Component {
  render() {
    const { location } = this.props.location;

    if (location === 'Edinburgh') {
      return (
        <Loading />
      );
    }

    if (this.props.weather.current === undefined) {
      return <Loading />
    }

    const locationResult = this.props.location;
    const currentWeather = this.props.weather.current;

    const localTime = (this.props.weather.timezone_offset - 3600);
    return (
      <div className="col-lg-4 col-12 my-5 d-flex flex-column justify-content-between">
        <div className="card">
          <div className="card-body">
            <span className="d-inline-flex justify-content-between w-100 align-items-center">
              <div className="d-inline-flex align-items-end">
                <h4 className="card-title me-2">{locationResult.adminArea4}</h4>
                <h6 className="card-title ml-2">{locationResult.adminArea1}</h6>
              </div>
              <img src={`http://openweathermap.org/img/wn/${currentWeather.weather.map(w => w.icon)}@2x.png`} alt="weather.icon" />
            </span>
            <span className="d-inline-flex justify-content-between w-100 align-items-center">
              <h3 className="card-subtitle text-bold">{parseInt(currentWeather.temp)} C</h3>
              <p className="card-text">{currentWeather.weather.map(w => w.description)}</p>
            </span>
            <span className="d-inline-flex mt-3 w-50 justify-content-between">
              <p className="me-2 text-warning"><i className="fas fa-sun"></i> {new Date(currentWeather.sunrise * 1000).toLocaleTimeString('en-UK', {hour: '2-digit', minute: '2-digit'})}</p>
              <p className="me-2 text-dark"><i className="fas fa-moon"></i> {new Date(currentWeather.sunset * 1000).toLocaleTimeString('en-UK', {hour: '2-digit', minute: '2-digit'})}</p>
            </span>
          </div>
        </div>
        <div className="card mt-4">
          <Mapbox />
        </div>
        <div className="card mt-4 p-5 clock-card">
          {/* <Clock time={localTime} /> */}
          <ReactClock time={localTime} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { location: state.location, weather: state.weather }
}

export default connect(mapStateToProps, {})(LocationDetail);
