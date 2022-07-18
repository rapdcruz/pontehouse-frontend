import { Fragment, useState } from 'react';
import { Col, Nav, Navbar, Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import AuthenticationService from '../../services/authentication.service';
import Flex from '../common/Flex';
import Logo from '../common/Logo';
import TopNavRightSideNavItem from './components/TopNavRightSideNavItem';

const NavbarTopPrivate = () => {
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  const isMobile = useMediaQuery({ query: `(max-width: 1199px)` });


  const handleBurgerMenu = () => {
    setNavbarCollapsed(!navbarCollapsed);
  };


  const NavbarLabel = ({ label }) => (
    <Nav.Item as="li">
      <Row className="mt-3 mb-2 navbar-vertical-label-wrapper">
        <Col xs="auto" className="navbar-vertical-label navbar-vertical-label">
          {label}
        </Col>
        <Col className="ps-0">
          <hr className="mb-0 navbar-vertical-divider"></hr>
        </Col>
      </Row>
    </Nav.Item>
  );


  const NavbarVerticalItem = ({ icon, name, navigateTo }) => {

    if (!navigateTo) {
      console.error("The attribute 'navigateTo' is mandatory!");
    }

    return (
      <Nav.Item as="li">
        <Nav.Link as={Link} to={navigateTo}>
          <Flex alignItems="center">
            {icon && (
              <span className="nav-link-icon">

                <i className={icon}> </i>
              </span>
            )}
            <span className="nav-link-text ps-1">{name}</span>
          </Flex>
        </Nav.Link>
      </Nav.Item>
    );
  }


  return (
    <Navbar className="navbar-glass fs--1 navbar-top sticky-kit" expand="xl">

      <Navbar.Toggle className="toggle-icon-wrapper me-md-3 me-2 d-xl-none" as="div" >
        <button
          className="navbar-toggler-humburger-icon btn btn-link d-flex flex-center"
          onClick={handleBurgerMenu}
          id="burgerMenu"
        >
          <span className="navbar-toggle-icon">
            <span className="toggle-line" />
          </span>
        </button>
      </Navbar.Toggle>

      <Logo at="navbar-top" width={100} id="topLogo" />


      {
        isMobile &&
        <Navbar.Collapse in={navbarCollapsed} className="scrollbar pb-3 pb-lg-0" >
          <Nav navbar>
            <Fragment>
              <NavbarLabel label="Painel de abastecimento" />
              <NavbarVerticalItem name="Gestão de Produtos" icon="fa-solid fa-bars-progress" navigateTo="/private/gerirprodutos" > </NavbarVerticalItem>

              {
                AuthenticationService.isAdminstrator() &&
                <>

                  <NavbarLabel label="Administração" />
                  <NavbarVerticalItem name="Dashboard" icon="fa-solid fa-chart-line" navigateTo="/private/admin/dashboard" > </NavbarVerticalItem>
                  <NavbarVerticalItem name="Lista de Utilizadores" icon="fa-solid fa-people-group" navigateTo="/private/admin/utilizador"> </NavbarVerticalItem>
                  <NavbarVerticalItem name="Lista de Produtos" icon="fa-solid fa-list" navigateTo="/private/admin/listarprodutos"> </NavbarVerticalItem>
                  <NavbarVerticalItem name="Histórico" icon="fa-solid fa-clock-rotate-left" navigateTo="/private/admin/historicogeral"> </NavbarVerticalItem>
                </>
              }

              <NavbarLabel label="Informação" />
              <NavbarVerticalItem name="Sobre nós" icon="fa-solid fa-users" navigateTo="/private/sobre"> </NavbarVerticalItem>
              <NavbarVerticalItem name="Contactos" icon="fa-solid fa-address-book" navigateTo="/private/contactos"> </NavbarVerticalItem>
            </Fragment>
          </Nav>
        </Navbar.Collapse>

      }

      <TopNavRightSideNavItem />

    </Navbar>
  );
};

export default NavbarTopPrivate;
