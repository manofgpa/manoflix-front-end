import React from 'react';
import ReactDOM from 'react-dom'
import Routers from './Routers'
import GlobalStyle from './assets/globalStyled'
import starter from './config/starter'

starter()

ReactDOM.render(
  <React.StrictMode>
    <Routers />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
