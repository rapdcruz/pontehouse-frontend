import React from 'react';
import { Button, CloseButton, Modal } from 'react-bootstrap';


const ProdutoTableModalDelete = ({produtoId, showDeleteModal, handleCloseModalDelete, handleConfirmModalDelete}) => {

    return (
        <Modal Modal show={showDeleteModal}
            onHide={handleCloseModalDelete}
            backdrop="static"
            keyboard={false} >
            <Modal.Header  className="bg-light border-2 border-success">
                <Modal.Title className="text-800 fs-2 " >Eliminar Produto</Modal.Title>
                <CloseButton onClick={handleCloseModalDelete} />
            </Modal.Header>
            <Modal.Body className='m-3'>
                Tem a certeza que pretende eliminar o produto com o id: {produtoId}?
            </Modal.Body>
            <Modal.Footer className="bg-light border-2 border-success">
                <Button variant="outline-secondary" onClick={handleCloseModalDelete}>
                    Cancelar
                </Button>
                <Button variant="outline-success"  onClick={handleConfirmModalDelete} > Confirmar</Button>
            </Modal.Footer  >
        </Modal>

    );

}

export default ProdutoTableModalDelete;
