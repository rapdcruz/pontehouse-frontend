import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {  Button, FormControl, InputGroup } from 'react-bootstrap';
import ProdutoService from '../../services/produto.service';
import ActionButton from '../common/ActionButton';
import ProdutoTableModalDelete from './ProdutoTableModalDelete';
import ProdutoTableModalUpdate from './ProdutoTableModalUpdate';
import ProdutoTableModalStock from './ProdutoTableModalStock';
import SoftBadge from '../common/SoftBadge';






const ProdutoTableRow = ({ produto, refreshData, setAlert, tableMode }) => {
    const [deltaStock, setDeltaStock] = useState(0);
    const [produtoId, setProdutoId] = useState(0);
    const [stockMode, setStockMode] = useState(0);

    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleCloseModalDelete = () => setShowDeleteModal(false);
    const handleShowModalDelete = () => setShowDeleteModal(true);
    const handleConfirmModalDelete = () => {
        //let produto = produtos.find(p => p.id == produtoId);
        produto.ativo = false;
        ProdutoService.update(produto, () => setShowDeleteModal(false), (error) => {
            console.error(error);
        });
    }


    const handleCloseConfirmationStockModal = () => {
        refreshData();
        setStockMode(0);
        setDeltaStock(0);
        setshowConfirmationStockModal(false);
    }
    const handleConfirmConfirmationStockModal = () => {
        produto.stock = produto.stock + deltaStock * stockMode;
        ProdutoService.updateStock(produto,
            (data) => {
                setAlert({
                    message: "Stock atualizado com sucesso ",
                    show: true,
                    variant: "success"
                });


                handleCloseConfirmationStockModal();
            },
            (error) => {
                console.error(error);
                setAlert({
                    message: "Erro ao atualizar stock",
                    show: true,
                    variant: "danger"
                });
                handleCloseConfirmationStockModal();
            });
    }


    const [showConfirmationStockModal, setshowConfirmationStockModal] = useState(false);

    const handleConfirmationStockModal = (mode) => {
        if (deltaStock == 0) {
            setAlert({
                message: "O valor inserido não pode ser zero.",
                show: true,
                variant: "danger"
            });
        } else {
            setStockMode(mode);
            setshowConfirmationStockModal(true);
        }

    }

    return (
        <>
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.ref}</td>
                <td>{produto.nome}</td>
                <td>{produto.min}</td>
                <td>{produto.max}</td>
                <td><SoftBadge pill bg={produto.stock < produto.min ? "danger" : "success"} >
                    {produto.stock}</SoftBadge>
                </td>
                {
                    (tableMode == "ProdutoTableModeDashboard") &&
                    <td>{produto.max - produto.stock}</td>
                }

                {
                    tableMode == "ProdutoTableModeList" &&
                    <td><SoftBadge pill bg={produto.ativo ? "primary" : "secondary"} >
                        {produto.ativo ? "Ativo" : "Inativo"}</SoftBadge>
                    </td>
                }


                {
                    tableMode == "ProdutoTableModeList" &&
                    <td className="text-end">
                        <ActionButton
                            icon="edit"
                            onClick={() => { setShowUpdateModal(true); setProdutoId(produto.id); }}
                            title="Edit"
                            variant="action"
                            className="p-0 me-2" />
                        <ActionButton
                            icon="trash-alt"
                            title="Delete"
                            variant="action"
                            onClick={() => { handleShowModalDelete(true); setProdutoId(produto.id); }}
                            className="p-0" />
                    </td>
                }
                {
                    tableMode == "ProdutoTableModeManage" &&
                    <td>
                        <InputGroup
                            className='input-stock'>
                            <FormControl
                                defaultValue={0}
                                min={0}
                                value={deltaStock}
                                type="number"
                                onChange={e => setDeltaStock(e.target.value)}
                            />
                            <Button variant="outline-secondary" onClick={() => handleConfirmationStockModal(1)}><FontAwesomeIcon icon="plus" className="text-success" /></Button>
                            <Button variant="outline-secondary" onClick={() => handleConfirmationStockModal(-1)}><FontAwesomeIcon icon="minus" className="text-danger" /></Button>
                        </InputGroup>
                    </td>

                }


            </tr>
            <ProdutoTableModalDelete
                produtoId={produtoId} showDeleteModal={showDeleteModal}
                handleCloseModalDelete={handleCloseModalDelete}
                handleConfirmModalDelete={handleConfirmModalDelete} >
            </ProdutoTableModalDelete>

            <ProdutoTableModalUpdate
                produtoId={produtoId} refreshData={refreshData}
                showUpdateModal={showUpdateModal} setShowUpdateModal={setShowUpdateModal} >
            </ProdutoTableModalUpdate>

            <ProdutoTableModalStock
                deltaStock={deltaStock} stockMode={stockMode} showConfirmationStockModal={showConfirmationStockModal}
                handleConfirmationStockModal={handleConfirmationStockModal} handleCloseConfirmationStockModal={handleCloseConfirmationStockModal}
                handleConfirmConfirmationStockModal={handleConfirmConfirmationStockModal}>
            </ProdutoTableModalStock>
        </>
    );
};




export default ProdutoTableRow;
