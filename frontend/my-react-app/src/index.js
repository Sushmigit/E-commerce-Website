/*import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import ShopContextProvider from './Context/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ShopContextProvider> 
    <App/>
  </ShopContextProvider>
);*/
//using this context we can provide the shopcontext to all the pages
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// In your main entry point, e.g., index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';  // Your main App component
import ShopContextProvider, { ShopContext } from './Context/ShopContext';  // Path to your ShopContextProvider

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
   <ShopContextProvider>
      <App />
      </ShopContextProvider>
  </React.StrictMode>
);

reportWebVitals();

