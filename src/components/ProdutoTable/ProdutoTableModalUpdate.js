import React, { useEffect, useState } from 'react';
import { CloseButton, Modal } from 'react-bootstrap';
import CreateOrUpdateProduto from './CreateOrUpdateProduto';



const ProdutoTableModalUpdate = ({ produtoId, refreshData, showUpdateModal, setShowUpdateModal }) => {
    return (
        <Modal show={showUpdateModal} size="lg" fullscreen="false" onHide={() => setShowUpdateModal(false)}>
            <Modal.Header className="bg-light border-2 border-success" >
                <Modal.Title className="text-800 fs-2 ">Atualizar Produto</Modal.Title>
                <CloseButton
                    className="btn btn-circle btn-sm transition-base p-0"
                    onClick={() => setShowUpdateModal(false)}
                />
            </Modal.Header>
            <Modal.Body className='m-3' >
                <CreateOrUpdateProduto id={produtoId} refreshParent={refreshData} />
            </Modal.Body>

        </Modal>
    );
}

export default ProdutoTableModalUpdate;
