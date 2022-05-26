import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './Hello';
import HelloName from './HelloName';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello/>
    <HelloName/>
  </React.StrictMode>
);
