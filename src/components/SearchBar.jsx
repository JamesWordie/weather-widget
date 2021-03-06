import React from 'react';
import { connect } from 'react-redux';
import { fetchGeocodeAndWeather } from '../actions';
import SearchForm from './SearchForm';

class SearchBar extends React.Component {
  onSubmit = formValues => {
    this.props.fetchGeocodeAndWeather(formValues)
  }

  // componentDidMount() {
  //   this.props.fetchGeocodeAndWeather('Edinburgh');
  // }

  render() {
    return (
      <div className="row justify-content-center search-bar">
        <div className="col-8">
          <SearchForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchGeocodeAndWeather })(SearchBar);
