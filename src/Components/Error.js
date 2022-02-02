import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error-page">
      <h2 className="error-heading">Page not found</h2>
      <Link className="error-link" to={'/'}>
        Navigate Home
      </Link>
    </div>
  );
};

export default Error;
