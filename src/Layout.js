import { Outlet, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Layout() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.pathname = '/';
  };

  const isAuthenticated = localStorage.getItem('isAuthenticated');
  console.log('this', isAuthenticated);

  return (
    <>
      <h1>
        <nav>
          <Link to="/">🏠</Link>
          <Link to="/login">☃️</Link>
          <Link to="/admin">👩🏾‍💻</Link>
          {isAuthenticated
&& <Button className="btn btn-primary" onClick={handleLogout}>Logout</Button>}

        </nav>
      </h1>
      <Outlet />
    </>
  );
}

export default Layout;
