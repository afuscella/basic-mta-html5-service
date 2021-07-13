import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './Main';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={MainPage} />
    </BrowserRouter>
  );
}

export default Routes;
