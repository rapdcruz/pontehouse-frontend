import React, { useContext } from 'react';
import PageHeader from './PageHeader';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HeaderPages = ({ ...rest }) => {
  return (
    <PageHeader
      title=""
      description=""
     //className="mb-3"
      {...rest}
    >
    </PageHeader>
  );
};
export default HeaderPages;
