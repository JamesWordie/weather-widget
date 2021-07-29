import React from 'react';
import SearchBar from './SearchBar';
import LocationDetail from './LocationDetail';
import Weather from './Weather'
// import Mapbox from './Mapbox';

const App = () => {
  return (
    <div>
      <>
          <SearchBar />
      </>
      <div className="container">
        <div className="row">
          <>
            <LocationDetail />
          </>
          <>
            <Weather />
          </>
        </div>
      </div>
    </div>
  );
};

export default App;
