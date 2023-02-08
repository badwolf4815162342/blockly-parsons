import {
  Link, Outlet, Navigate,
  useLocation,
} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import WizardNavBar from './ui/screens/game/components/wizard.navbar';
import VerticalSpace from './ui/utils/verticalspace';

function Layout() {
  const location = useLocation();
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
    <div className="bg">
      <Navbar className="nav-bar justify-content-start">
        <Container fluid className="justify-content-start">
          <Navbar.Brand className="white-text"><h3 style={{ marginBottom: '0px' }}>Blockly Parsons Puzzles</h3></Navbar.Brand>
          <Navbar.Collapse className="justify-content-start">
            <Nav>
              <Nav.Link>
                <Link className="nav-link" to="/">
                  <Stack direction="horizontal">
                    <i style={{ fontSize: '20px', fontWeight: '800' }} className="material-icons">arrow_forward</i>
                    <h4 style={{ marginBottom: '0px' }}>EXERCISES</h4>
                  </Stack>
                </Link>

              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" to="/admin">
                  <Stack direction="horizontal">
                    <i style={{ fontSize: '20px', fontWeight: '700' }} className="material-icons">arrow_forward</i>
                    <h4 style={{ marginBottom: '0px' }}>ADMIN</h4>
                  </Stack>
                </Link>

              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-center">
            {location.pathname.includes('gamescreen') && (
              <Container fluid style={{ paddingRight: '300px' }}>
                <WizardNavBar />
                <VerticalSpace />
              </Container>
            )}
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            {isLoggedIn
            && (
            <Button size="sm" onClick={handleLogout}>Logout</Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Layout;
