import React from 'react';
import { connect } from 'react-redux';

class WeatherDaily extends React.Component {
  renderedDailyResult = (daily) => {
    if (daily) {
      return (
        daily.map((day) => {
          const date = new Date(day.dt * 1000);
          return (
            <div className="card m-2" key={day.dt} style={{ width: '30%'}}>
                      <i className="bi bi-umbrella"></i>
              <div className="card-header">
                <h5 className="card-title text-center">{new Intl.DateTimeFormat('en-UK', { weekday: 'long' }).format(date)}</h5>
                <h5 className="card-subtitle text-muted text-center">{date.toLocaleDateString('en-UK')}</h5>
              </div>
              <div className="card-body">
                <div className="card-text">
                  <div className="row justify-content-evenly align-items-center">
                    <div className="col-6 text-center">
                      <img alt="weather icon" src={`http://openweathermap.org/img/wn/${day.weather.map(w => w.icon)}@2x.png`} />
                    </div>
                    <div className="col-6 text-center">
                      <div className="d-flex flex-column">
                        <h6>{parseInt(day.temp.max)} C</h6>
                        <h6 className="text-muted">{parseInt(day.temp.min)} C</h6>
                      </div>
                    </div>
                    <div className="col-6 text-center text-muted">{day.weather.map(w => w.description)}</div>
                    <div className="col-6 text-center">
                      <h6>{parseInt(day.rain * 10)}%</h6>
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
      <div className="d-inline-flex flex-wrap justify-content-evenly">
        {this.renderedDailyResult(daily)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { weather: state.weather }
}

export default connect(mapStateToProps, {})(WeatherDaily);
