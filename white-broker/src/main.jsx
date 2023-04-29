import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Context } from './context/context.js';
import { mainPageData } from './context/mainPageData.js';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Context.Provider value={mainPageData}>
         <App />
      </Context.Provider>
   </React.StrictMode>
);
