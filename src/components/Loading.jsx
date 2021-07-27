import React from 'react';

const Loading = () => {
  return (
    <div className="row justify-content-center align-items-center my-5">
      <div className="col-6 text-center d-inline-flex justify-content-center align-items-center w-100">
        <span className="mx-4">Make your search now..</span>
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
