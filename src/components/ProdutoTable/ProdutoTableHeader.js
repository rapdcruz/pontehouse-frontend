import { useState } from 'react';
import { CloseButton, Col, Modal, Row } from 'react-bootstrap';
import IconButton from '../../components/common/IconButton';
import Flex from '../common/Flex';
import CreateOrUpdateProduto from './CreateOrUpdateProduto';
const ProdutosTableHeader = ({ tableMode, refreshData, title="Produtos" }) => {
  const [show, setShow] = useState(false);
  return (
    <Row className="flex-between-center ">
      <Col xs="auto">
        <h5 className="fs-0 mb-0 text-nowrap py-2 py-xl-0"> {title} </h5>
      </Col>
      <Col  xs="4" as={Flex} className="justify-content-end">
      {tableMode == "ProdutoTableModeList" &&
            <IconButton
              variant="outline-success"
              className="mt-2 mb-1 m-2"
              size="sm"
              icon="plus"
              transform="shrink-3"
              onClick={() => setShow(true)}
            >
              <span className="fs--2 me-1">Novo</span>
            </IconButton>
          }
            <IconButton
            variant="outline-secondary"
            className="mt-2 mb-1 m-2"
            size="sm"
            icon="spinner"
            transform="shrink-3"
            onClick={() => refreshData()}
          >
            <span className="fs--2 me-1">Atualizar</span>
          </IconButton>
          
          

    
      </Col>
      <Modal show={show} size="lg" fullscreen="false" onHide={() => setShow(false)}>
        <Modal.Header className="bg-light border-2 border-success">
          <Modal.Title className="text-800 fs-2">Nova bebida</Modal.Title>
          <CloseButton className="btn btn-circle btn-sm transition-base p-0"
            onClick={() => setShow(false)} />
        </Modal.Header>
        <Modal.Body className='m-3'>
          <CreateOrUpdateProduto refreshParent={refreshData} />
        </Modal.Body>
      </Modal>

    </Row>
  );
};

export default ProdutosTableHeader;
