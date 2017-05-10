import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//imported Components
import App from './components/App';


render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById("react-container")
);
