import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.scss';
import { router } from './router.jsx';

// решил объединить main.jsx и App.jsx, так как по отдельности
// в них было мало смысла из-за небольшого количества кода (конкретно в данном проекте)

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
