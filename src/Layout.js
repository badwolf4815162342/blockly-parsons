import { Link, Outlet, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Layout() {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(localStorage.getItem('isAuthenticated'));
    window.addEventListener('storage', () => {
      console.log('change to local storage!');
      setLoggedIn(localStorage.getItem('isAuthenticated'));
    });
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setRedirectToReferrer(true);
  };

  if (redirectToReferrer) {
    return (
      <Navigate to="/login" />
    );
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Blockly Parsons</Navbar.Brand>
          <Navbar.Collapse className="justify-content-start">
            <Nav>
              <Nav.Link><Link to="/">Exercises</Link></Nav.Link>
              <Nav.Link><Link to="/admin">Admin</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {isLoggedIn
&& (
<Navbar.Collapse className="justify-content-end">
  <Button size="sm" onClick={handleLogout}>Logout</Button>
  {' '}
</Navbar.Collapse>
)}
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
}

export default Layout;
