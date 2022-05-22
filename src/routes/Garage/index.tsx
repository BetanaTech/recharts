import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Root from './Root';
import Test1 from './Test1';

export default function Garage() {
  const location = useLocation();
  useEffect(() => {
    document.title = 'Garage';
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="test1" element={<Test1 />} />
      </Route>
    </Routes>
  );
}
