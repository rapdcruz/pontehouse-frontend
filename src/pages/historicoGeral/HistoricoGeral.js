

import { useEffect, useState } from 'react';
import PageHeader from '../../components/common/PageHeader';
import HistoryTable from '../../components/historico/HistoryTable';
import HistoryService from '../../services/history.service';

const HistoricoGeral = () => {

  const [historicos, setHistoricos] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    HistoryService.getAll(
      (data) => {
        setHistoricos(data.result);
        setMessage(null);
      },
      (error) => {
        setHistoricos([]);
        setMessage("Não foi possível obter a lista de histórico.");
      });
  }, []);

  



  return (
    <>
      <PageHeader
        title="Histórico geral"
        description="Aqui podes consultar todos os movimentos da api."
        className="mb-3">
      </PageHeader>
      <HistoryTable></HistoryTable>

    </>
  );
};

export default HistoricoGeral;

