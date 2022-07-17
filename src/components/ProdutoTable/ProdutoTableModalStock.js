import React from 'react';
import { Button, CloseButton, Modal } from 'react-bootstrap';


const ProdutoTableModalStock = ({ deltaStock, stockMode, showConfirmationStockModal, handleConfirmationStockModal, handleCloseConfirmationStockModal,handleConfirmConfirmationStockModal }) => {
    return (

        <Modal show={showConfirmationStockModal}
            onHide={handleConfirmationStockModal}
            backdrop="static"
            keyboard={false}>
            <Modal.Header className="bg-light border-2 border-success">
                <Modal.Title className="text-800 fs-2" >{stockMode == 1 ? "Adicionar stock" : "Remover Stock"}</Modal.Title>
                <CloseButton onClick={handleCloseConfirmationStockModal} />
            </Modal.Header>
            <Modal.Body className="m-3">
                Tem a certeza que pretende {stockMode == 1 ? " adicionar " : " remover "} a quantidade {" " + deltaStock + " "}?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" onClick={handleCloseConfirmationStockModal}>
                    Cancelar
                </Button>
                <Button variant="outline-success" onClick={handleConfirmConfirmationStockModal} > Confirmar</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ProdutoTableModalStock;



