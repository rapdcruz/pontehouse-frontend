import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import StatisticsCards from './components/statsCard/StatisticsCards';
import { Col, Row } from 'react-bootstrap';
import HistoryTable from '../../components/historico/HistoryTable';
import ProdutoTable from '../../components/ProdutoTable/ProdutoTable';


const Dashboard = () => {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Consulta aqui a info mais importante da aplicação. "
        className="mb-3"
      />

      <StatisticsCards />

      <Row className="g-3">
        <Col>
          <ProdutoTable mode="ProdutoTableModeDashboard" title="Produtos em falta"></ProdutoTable>
        </Col>
      </Row>

      <Row className="g-3">
        <Col>

          <HistoryTable limit={20}> </HistoryTable>

        </Col>
      </Row>






    </>
  );
};

export default Dashboard;
