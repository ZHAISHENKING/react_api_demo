import React from 'react';
import store from "./store";
import ReactDom from 'react-dom';
import App from './App';
import {Provider} from "react-redux";


ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'))