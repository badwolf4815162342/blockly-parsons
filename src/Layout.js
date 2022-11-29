import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <>
      <nav>
        <Link to="/">🏠</Link>

      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
