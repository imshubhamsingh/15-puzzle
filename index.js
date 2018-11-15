import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from '@Src';

const rootEl = document.getElementById('root');

const renderComponent = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );
};

renderComponent(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    renderComponent(App);
  });
}
