import React from 'react';
import SearchBar from './SearchBar';
import LocationDetail from './LocationDetail';

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
{/*        <div className="col-md-8">
          <Weather />
        </div>
        <div className="col-md-4">
          <Time />
        </div>
        <div className="col-md-8">
          <Map />
        </div>*/}
      </div>
    </div>
  );
};

export default App;
