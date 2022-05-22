import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Root from './Root';
import Recharts from './Recharts';

export default function Playground() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="recharts" element={<Recharts />} />
      </Route>
    </Routes>
  );
}
