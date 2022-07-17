import { Col, Row } from 'react-bootstrap';
import IconButton from '../common/IconButton';


const HistoryTableHeader = ({ refreshData }) => {


  return (
    <Row className="flex-between-center">
      <Col xs={4} sm="auto" className="d-flex align-items-center pe-0">
        <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0"> Histórico </h5>
      </Col>

      <Col xs={4} sm="auto" className="justify-content-end" >
          <IconButton
            variant="outline-secondary"
            className="mt-2 mb-1 d-inline m-2"
            size="sm"
            icon="spinner"
            transform="shrink-3"
            onClick={() => refreshData()}
          >
            <span className="fs--2 me-1">Atualizar</span>
          </IconButton>
      </Col>
    </Row>
  );
};

export default HistoryTableHeader;
