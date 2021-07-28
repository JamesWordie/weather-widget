import React from 'react';
import SearchBar from './SearchBar';
import LocationDetail from './LocationDetail';
import Weather from './Weather'
// import Mapbox from './Mapbox';

const App = () => {
  return (
    <div className="container">
      <>
        <SearchBar />
      </>
      <div className="row">
        <>
          <LocationDetail />
        </>
        <>
          <Weather />
        </>
{/*    <div className="col-md-4">
          <Time />
        </div>*/}
{/*        <>
          <Mapbox />
        </>*/}
      </div>
    </div>
  );
};

export default App;
