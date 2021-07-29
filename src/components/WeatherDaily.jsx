import React from 'react';
import { connect } from 'react-redux';

class WeatherDaily extends React.Component {
  renderedDailyResult = (daily) => {
    if (daily) {
      return (
        daily.map((day) => {
          const date = new Date(day.dt * 1000);
          return (
            <div className="col">
            <div className="card h-100" key={day.dt}>
              <div className="card-header">
                <h5 className="card-title text-center">{new Intl.DateTimeFormat('en-UK', { weekday: 'long' }).format(date)}</h5>
                <h5 className="card-subtitle text-muted text-center">{date.toLocaleDateString('en-UK', {day: '2-digit', month: '2-digit'})}</h5>
              </div>
              <div className="card-body">
                <div className="card-text">
                  <div className="row justify-content-evenly align-items-center">
                    <div className="col-lg-6 text-center">
                      <img alt="weather icon" src={`http://openweathermap.org/img/wn/${day.weather.map(w => w.icon)}@2x.png`} />
                    </div>
                    <div className="col-lg-6 text-center">
                      <div className="d-flex flex-column">
                        <h6 className='text-danger temp'>{parseInt(day.temp.max)} C</h6>
                        <h6 className="text-info temp">{parseInt(day.temp.min)} C</h6>
                      </div>
                    </div>
                    <div className="col-lg-6 text-center">{day.weather.map(w => w.description)}</div>
                    <div className="col-lg-6 text-center">
                      <span className="d-inline-flex">
                        <i className="fas fa-umbrella"></i>
                        <h6 className="ml-2">{day.rain ? parseInt(day.rain * 10) : 0}%</h6>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          );
        })
      );
    }
  }

  render() {
    const daily = this.props.weather.daily;
    return (
      // <div className="d-inline-flex flex-wrap justify-content-evenly">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {this.renderedDailyResult(daily)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { weather: state.weather }
}

export default connect(mapStateToProps, {})(WeatherDaily);
