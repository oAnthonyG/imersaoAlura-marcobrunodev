import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Colors from './styles/settings/Colors';
import Reset from './styles/Reset';
import App from './App';
import Video from './pages/videos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Colors />
    <Reset />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
