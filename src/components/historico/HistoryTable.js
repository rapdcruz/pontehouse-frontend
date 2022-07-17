import React, { useEffect, useState } from 'react';
import HistoryTableRow from './HistoryTableRow';
import HistoryService from '../../services/history.service';
import { Table, Card } from 'react-bootstrap';
import HistoryTableHeader from './HistoryTableHeader';


const HistoryTable = ({ userId = null, limit = 0 }) => {
    const [historyList, setHistoryList] = useState([]);
    const [message, setMessage] = useState(null);


    const successHandler = (data) => {
        setMessage(null);
        setHistoryList(data.result);
    }
    const errorHandler = (error) => {
        console.error(error);
        setMessage("Não foi possível obter a lista de histórico.");
        setHistoryList([]);
    }

    useEffect(() => {
        refreshData();
    }, []);

    const refreshData = () => {
        if (userId == null) {
            HistoryService.getAll(limit, successHandler, errorHandler);
        } else {
            HistoryService.getByCurrentUser(successHandler, errorHandler);
        }
    }


    return (

        <Card>
            <Card.Header>
                <HistoryTableHeader table refreshData={refreshData} />
            </Card.Header>
            <Card.Body className="bg-light ">
                <Table responsive striped hover>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Timestamp</th>
                            <th scope="col">Utilizador</th>
                            <th scope="col">Ação</th>
                            <th scope="col">Mensagem</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historyList.map(history => (
                            <HistoryTableRow id={history.id} timestamp={history.timestamp}
                                userId={history.userId} action={history.action} log={history.log} key={history.id} />
                        ))}
                    </tbody>
                </Table>
            </Card.Body>

        </Card>

    );
};

export default HistoryTable;

