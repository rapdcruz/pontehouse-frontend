import { useEffect } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/novos/logos/logo_2.png';
import handleNavbarTransparency from '../../helpers/handleNavbarTransparency';



const NavbarPublic = () => {

  useEffect(() => {
    window.addEventListener('scroll', handleNavbarTransparency);
    return () => window.removeEventListener('scroll', handleNavbarTransparency);
  }, []);

  return (
    <Navbar
      variant="light"
      fixed="top"
      expand="lg"
      className="navbar-standard navbar-theme bg-dark"
    >
      <Container>
        <Navbar.Brand className="text-white dark__text-white" as={Link} to="/public/landing">
          <Link
            to="/"
            className=
            'text-decoration-none'>
            <img className="me-2" src={logo} alt="Logo" width={100} />
          </Link>

        </Navbar.Brand>
        <Nav navbar as="ul">
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/public/login">
              <Button
                variant="outline-success"
                size="sm"
                className="mt-2 mb-1 w-100"
                transform="shrink-3">
                <span className="fs--2 me-1">Login</span>
              </Button >
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarPublic;
