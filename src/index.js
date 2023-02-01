import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';

import './styles/settings/colors.css';
import './styles/reset.css';
import Video from './pages/videos/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
