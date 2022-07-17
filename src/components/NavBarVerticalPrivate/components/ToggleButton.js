import { useState } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

const renderTooltip = props => (
  <Tooltip id="button-tooltip" {...props}>
    Toggle Navigation
  </Tooltip>
);

const ToggleButton = () => {
  const [isNavbarVerticalCollapsed, setNavbarVerticalCollapsed] = useState(false);

  const handleClick = () => {
    document
      .getElementsByTagName('html')[0]
      .classList.toggle('navbar-vertical-collapsed');
    setNavbarVerticalCollapsed(!isNavbarVerticalCollapsed);
  };

  return (
    <OverlayTrigger
      placement="left"
      overlay={renderTooltip}
    >
      <div className="toggle-icon-wrapper">
        <Button
          variant="link"
          className="navbar-toggler-humburger-icon navbar-vertical-toggle"
          id="toggleNavigationTooltip"
          onClick={handleClick}
        >
          <span className="navbar-toggle-icon">
            <span className="toggle-line" />
          </span>
        </Button>
      </div>
    </OverlayTrigger>
  );
};

export default ToggleButton;
