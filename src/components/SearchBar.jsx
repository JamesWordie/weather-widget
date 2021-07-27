import React from 'react';
import { connect } from 'react-redux';
import { fetchGeocodeAndWeather } from '../actions';
import SearchForm from './SearchForm';

class SearchBar extends React.Component {
  onSubmit = formValues => {
    this.props.fetchGeocodeAndWeather(formValues)
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-8">
          <SearchForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchGeocodeAndWeather })(SearchBar);
