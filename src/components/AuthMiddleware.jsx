import React from 'react';

function AuthMiddleware(TargetComponent) {
    //TargetComponent ,if auth is true go targetcomponent
  return function AuthenticatedComponent(props) {
    const isAuthenticated = false;  //change value for test

    if (!isAuthenticated) {
      return <div>Please log in.</div>;
    }

    return <TargetComponent {...props} />;
  };
}

export default AuthMiddleware;