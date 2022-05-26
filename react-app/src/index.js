import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './Hello';
import HelloName from './HelloName';
import Sum from './sum';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello/>
    <HelloName/>
    <Sum/>
  </React.StrictMode>
);
