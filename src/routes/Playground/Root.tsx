import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <h1>Playground</h1>
      <Outlet />
    </>
  );
}
