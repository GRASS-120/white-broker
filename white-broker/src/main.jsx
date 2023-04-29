import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Context } from './context/context.js';
import { data } from './context/data.js';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Context.Provider value={data}>
         <App />
      </Context.Provider>
   </React.StrictMode>
);
