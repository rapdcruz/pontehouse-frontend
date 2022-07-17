import IconButton from '../../../components/common/IconButton';
import PropTypes from 'prop-types';
import { Col, Row, Modal, CloseButton } from 'react-bootstrap';
import React, { useState } from 'react';
import CreateOrUpdateUtilizador from './CreateOrUpdateUtilizador';
import Flex from '../../../components/common/Flex';



const CustomersTableHeader = ({ selectedRowIds, refreshData }) => {
  const [show, setShow] = useState(false);
  const [fullscreen] = useState(false);
  return (
    <Row className="flex-between-center">
      <Col xs="auto">
        <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">Lista de utilizadores</h5>
      </Col>
      <Col xs="2" as={Flex}>
        <IconButton
          variant="outline-success"
          size="sm"
          className="mt-2 mb-1 w-100"
          icon="plus"
          transform="shrink-3"
          onClick={() => setShow(true)}
        >
          <span className="fs--2 me-1">Novo</span>
        </IconButton>

      </Col>








      {/* MODAL INSERT PRODUTO */}

      <Modal show={show} size="lg" fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header className="bg-light border-2 border-success">
          <Modal.Title className="text-800">Nova bebida</Modal.Title>
          <CloseButton className="btn btn-circle btn-sm transition-base p-0"
            onClick={() => setShow(false)} />
        </Modal.Header>
        <Modal.Body className='m-3'>
          <CreateOrUpdateUtilizador refreshParent={refreshData} />
        </Modal.Body>
      </Modal>







    </Row >
  );
};

CustomersTableHeader.propTypes = {
  selectedRowIds: PropTypes.object
};

export default CustomersTableHeader;
