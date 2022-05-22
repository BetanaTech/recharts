import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Root from './Root';
import Garage from './routes/Garage';
import Playground from './routes/Playground';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="garage/*" element={<Garage />} />
        <Route path="playground/*" element={<Playground />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
