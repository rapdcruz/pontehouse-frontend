
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';


const HistoricoGeralTableHeader = ({ selectedRowIds }) => {
  const [show, setShow] = useState(false);
  const [fullscreen] = useState(false);
  return (
    <Row className="flex-between-center">
      <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
        <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0">Lista de histórico</h5>
      </Col>
    </Row>
  );
};

HistoricoGeralTableHeader.propTypes = {
  selectedRowIds: PropTypes.object
};

export default HistoricoGeralTableHeader;
