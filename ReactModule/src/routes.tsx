import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ShellBar, ThemeProvider } from '@ui5/webcomponents-react';

import { MainPage } from './pages/Main';

function Routes() {
  return (
    <ThemeProvider>
      <ShellBar primaryTitle="UI5 Web Components for React Template" />
      <BrowserRouter>
        <Route path="/" exact component={MainPage} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Routes;