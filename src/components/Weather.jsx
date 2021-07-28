import React from 'react';
import { connect } from 'react-redux';
import WeatherDaily from './WeatherDaily';

// class Weather extends React.Component {
//   render() {
//     const { weather } = this.props;
//     return (
//       <div className="col-md-8 my-5">
//         <div className="card">
//           <h1>Weather</h1>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return { weather: state.weather }
// }

// export default connect(mapStateToProps, {})(Weather);

const Weather = () => {
  return (
    <div className="col-md-8 my-5">
      <div className="card">
        <WeatherDaily />
      </div>
    </div>
  );
};

export default Weather;
