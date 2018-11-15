import React, { PureComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from '@Pages';

export default class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}
