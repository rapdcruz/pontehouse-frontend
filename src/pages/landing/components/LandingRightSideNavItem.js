import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  Card,
  Modal,
  Nav,
  OverlayTrigger,
  Tooltip,
  Dropdown
} from 'react-bootstrap';



const LandingRightSideNavItem = () => {



  return (
    <Nav navbar className="ms-auto">
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/public/login"
        >
          Login
        </Nav.Link>
      </Nav.Item>



    </Nav>
  );
};

export default LandingRightSideNavItem;
