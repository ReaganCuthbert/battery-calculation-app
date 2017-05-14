import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//redux imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/mainReducer';

//Imported Components
import App from './components/App';
import Modal from 'react-modal';

//Redux Store Creation
const store = createStore(reducers);



render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("react-container")
);
