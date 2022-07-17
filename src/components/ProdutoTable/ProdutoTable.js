import React, { useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';

import ProdutoService from '../../services/produto.service';
import IconAlert from '../common/IconAlert';
import ProdutosTableHeader from './ProdutoTableHeader';
import ProdutoTableRow from './ProdutoTableRow';

const ProdutoTableModeList = "ProdutoTableModeList";
const ProdutoTableModeManage = "ProdutoTableModeManage";
const ProdutoTableModeDashboard = "ProdutoTableModeDashboard";

const ProdutoTable = ({ mode, title="Produtos" }) => {

    const [produtos, setProdutos] = useState([]);
    const [alert, setAlert] = useState(null);

    const refreshData = () => {

        if (mode == ProdutoTableModeList) {
            ProdutoService.getAll(
                (data) => {
                    setProdutos(data.result);
                },
                (error) => {
                    setProdutos([]);
                    setAlert({
                        message: "Não foi possível obter a lista de produtos." + error.response.data.message,
                        show: true,
                        variant: "danger"
                    });
                });
        } else if (mode == ProdutoTableModeManage) {
            ProdutoService.getAllByActive(true,
                (data) => {
                    setProdutos(data.result);
                },
                (error) => {
                    setProdutos([]);
                    setAlert({
                        message: "Não foi possível obter a lista de produtos." + error.response.data.message,
                        show: true,
                        variant: "danger"
                    });
                });
        } else if (mode == ProdutoTableModeDashboard) {
            ProdutoService.getByLowStock(
                (data) => {
                    setProdutos(data.result);
                },
                (error) => {
                    setProdutos([]);
                    setAlert({
                        message: "Não foi possível obter a lista de produtos." + error.response.data.message,
                        show: true,
                        variant: "danger"
                    });
                });
        }
    }
    useEffect(() => {
        setAlert(null);
        refreshData();
    }, []);
    return (
        <Card className="mb-3">
            <Card.Header>
                <ProdutosTableHeader table tableMode={mode} refreshData={refreshData} title={title} />
            </Card.Header>
            <Card.Body className="p-0">
                {
                    alert && alert.show &&
                    <IconAlert
                        variant={alert.variant}
                        dismissible={true}
                        onClose={() => setAlert(null)}>
                        {alert.message}
                    </IconAlert>
                }
                <Table responsive striped hover>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Referência</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Minimo</th>
                            <th scope="col">Máximo</th>
                            <th scope="col">Stock</th>
                            {
                                (mode == ProdutoTableModeDashboard) &&
                                <th scope="col">Encomenda</th>
                            }
                            {
                                mode == ProdutoTableModeList &&
                                <th scope="col">Estado</th>
                            }
                            {
                                (mode == ProdutoTableModeList || mode == ProdutoTableModeManage) &&
                                <th scope="col">Ação</th>
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {produtos && produtos.map(produto => (
                            <ProdutoTableRow key={produto.id} produto={produto} refreshData={refreshData}
                                setAlert={setAlert} tableMode={mode}></ProdutoTableRow>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}
export default ProdutoTable;
