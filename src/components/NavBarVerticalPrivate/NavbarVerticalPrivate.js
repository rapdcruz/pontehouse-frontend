import PropTypes from 'prop-types';
import { Fragment, useEffect, useState } from 'react';
import { Col, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bgNavbar from '../../assets/img/novos/bg/bg-navbar.png';
import AuthenticationService from '../../services/authentication.service';
import Flex from '../common/Flex';
import Logo from '../common/Logo';
import ToggleButton from './components/ToggleButton';





const NavbarVerticalPrivate = () => {
  const [config, setConfig] = useState({
    config: {
      navbarPosition: 'vertical',
      navbarStyle: 'transparent',
      isNavbarVerticalCollapsed: false,
      showBurgerMenu: false
    }
  });


  const HTMLClassList = document.getElementsByTagName('html')[0].classList;

  useEffect(() => {
    if (config.isNavbarVerticalCollapsed) {
      HTMLClassList.add('navbar-vertical-collapsed');
    } else {
      HTMLClassList.remove('navbar-vertical-collapsed');
    }
    return () => {
      HTMLClassList.remove('navbar-vertical-collapsed-hover');
    };
  }, [config.isNavbarVerticalCollapsed, HTMLClassList]);

  //Control mouseEnter event
  let time = null;
  const handleMouseEnter = () => {
    if (config.isNavbarVerticalCollapsed) {
      time = setTimeout(() => {
        HTMLClassList.add('navbar-vertical-collapsed-hover');
      }, 100);
    }
  };
  const handleMouseLeave = () => {
    clearTimeout(time);
    HTMLClassList.remove('navbar-vertical-collapsed-hover');
  };

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

  return (
    <Navbar
      expand="xl"
      className='navbar-vertical navbar-transparent'
      variant="light"
    >
      <Flex alignItems="center">
        <ToggleButton />
        <Logo at="navbar-vertical" width={120} />
      </Flex>
      <Navbar.Collapse
        in={config.showBurgerMenu}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundImage:
            config.navbarStyle === 'vibrant'
              ? `linear-gradient(-45deg, rgba(0, 160, 255, 0.86), #0048a2),url(${bgNavbar})`
              : 'none'
        }}
      >
        <div className="navbar-vertical-content scrollbar">
          <Nav className="flex-column" as="ul">
            <Fragment>
              <NavbarLabel label="Painel de abastecimento" />
              <NavbarVerticalItem name="Gestão de produtos" icon="fa-solid fa-bars-progress" navigateTo="/private/gerirprodutos" > </NavbarVerticalItem>
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
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavbarVerticalPrivate.propTypes = {
  label: PropTypes.string
};

export default NavbarVerticalPrivate;
