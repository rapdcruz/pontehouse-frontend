import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthenticationService from '../../../services/authentication.service';
import Avatar from '../../common/Avatar';

const ProfileDropdown = () => {
  function getName() {
    const user = AuthenticationService.getUserFromStorage();
    return user.primeiroNome + ' ' + user.ultimoNome;
  }

  return (

    <Dropdown navbar={true} as="li">
      <Dropdown.Toggle
        bsPrefix="toggle"
        as={Link}
        to="#!"
        className="pe-0 ps-2 nav-link"
      >
        <Avatar name={getName().toUpperCase()} />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-caret dropdown-menu-card  dropdown-menu-end">
        <div className="bg-white rounded-2 py-2 dark__bg-1000">
          <Dropdown.Item as={Link} to="/private/profilesettings">
            Settings
          </Dropdown.Item>
          <Dropdown.Item as={Link} onClick={() => AuthenticationService.logout()} to="/public">
            Logout
          </Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
