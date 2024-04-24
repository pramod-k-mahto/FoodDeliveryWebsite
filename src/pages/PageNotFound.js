import React from 'react';
import './PageNotFound.css'; // Import the CSS file for styling

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <p className="not-found-text">Oops! The page you're looking for does not exist.</p>
      {/* <img className="not-found-image" src="https://example.com/404-image.png" alt="Page not found" /> */}
    </div>
  );
}

export default PageNotFound;
