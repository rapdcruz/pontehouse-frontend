import { Nav } from 'react-bootstrap';
import AuthenticationService from '../../../services/authentication.service';
import ProfileDropdown from './ProfileDropdown';

const TopNavRightSideNavItem = () => {

  function getName() {
    const user = AuthenticationService.getUserFromStorage();
    return user.primeiroNome + ' ' + user.ultimoNome;
  }
  return (
    <Nav
      navbar
      className="navbar-nav-icons ms-auto flex-row align-items-center"
      as="ul"
    >
      <Nav.Item as={'li'}>

        <div className="fw-bolder">{getName().toUpperCase()}</div>
      </Nav.Item>

      <ProfileDropdown />
    </Nav>
  );
};

export default TopNavRightSideNavItem;
