import '../node_modules/material-components-web/dist/material-components-web.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

window.onload = () => {
  ReactDOM.render(
    <div>
      <Dashboard />
    </div>,
    document.querySelector('#container')
  );
};

// import { textfield } from 'material-components-web';

// import * as mdc from 'material-components-web';
// const checkbox = new mdc.checkbox.MDCCheckbox();

// window.test = checkbox;
// console.log('testing app...')

// const textfield = new textfield();

// import { MDCCheckboxFoundation } from '@material/checkbox'
// <MDCCheckboxFoundation />
