import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

import './styles/settings/colors.css'
import './styles/reset.css'
import Video from './pages/videos/index.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/video' element={<Video/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

