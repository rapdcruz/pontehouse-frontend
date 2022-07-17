import React, { useEffect , useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import StatisticsCard from './StatisticsCard';
import UtilizadorService from '../../../../services/utilizador.service';
import ProdutoService from '../../../../services/produto.service';
import HistoricoService from '../../../../services/history.service';
import bg from '../../../../assets/img/novos/bg/bg3.png';


const StatisticsCards = () => {
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [historyCount, setHistoryCount] = useState(0);

  useEffect(() => {
    UtilizadorService.getAll(
      (data) => setUserCount(data.result.length),
      (error) => setUserCount(0)
    );
    ProdutoService.getAll(
      (data) => setProductCount(data.result.length),
      (error) => setProductCount(0)
    );
    HistoricoService.getAll(0,
      (data) => setHistoryCount(data.result.length),
      (error) => setHistoryCount(0)
    );
  }, []);

  return (
    <Row className="g-3 mb-3">
      <Col sm={12} md={4}>
        <StatisticsCard title="Utilizadores" value={userCount}
          link="/private/admin/utilizador"
          linkText="Ver todos os utilizadores"
          style={{ minWidth: '12rem' }}
          image={bg} />
      </Col>
      <Col sm={12} md={4}>
        <StatisticsCard title="Produtos" value={productCount}
          link="/private/admin/listarprodutos"
          linkText="Ver todos os produtos"
          style={{ minWidth: '12rem' }} 
          image={bg}/>
      </Col>
      <Col sm={12} md={4}>
        <StatisticsCard title="Histórico" value={historyCount}
          link="/private/admin/historicogeral"
          linkText="Ver histórico completo"
          style={{ minWidth: '12rem' }} 
          image={bg}/>
      </Col>
    </Row>
  );
};

export default StatisticsCards;
