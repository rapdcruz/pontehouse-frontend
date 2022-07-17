import { useEffect, useState } from 'react';
import SoftBadge from '../../components/common/SoftBadge';
import Avatar from '../common/Avatar';

import UtilizadorService from '../../services/utilizador.service';


const HistoryTableRow = ({ id, timestamp, userId, action, log }) => {
  const [user, setUser] = useState(null);


  const successHandler = (data) => {
    setUser(data.result);
  }

  const errorHandler = (error) => {
console.error(error);
  }

  useEffect(() => {
    UtilizadorService.getById(userId, successHandler, errorHandler);
  }, []);

  const formatTimestamp = (timeString) => {
    try {
      const date = new Date(Number(timeString));
      return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
        + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }
    catch (e) {
      return timeString
    }
  }

  const formatActionBadge = (actionString) => {
    switch (actionString) {
      case "LOGIN_ACTION":
        return { text: 'Login', color: 'success' };
      case "LOGOUT_ACTION":
        return { text: 'LogOut', color: 'success' };
      case "CREATE_USER_ACTION":
        return { text: 'Criar utilizador', color: 'primary' };
      case "CREATE_PRODUCT_ACTION":
        return { text: 'Criar Produto', color: 'primary' };
      case "UPDATE_USER_ACTION":
        return { text: 'Atualizar utilizador', color: 'warning' };
      case "UPDATE_PASSWORD_USER_ACTION":
        return { text: 'Atualizar password', color: 'warning' };
      case "UPDATE_PRODUCT_ACTION":
        return { text: 'Atualizar produto', color: 'warning' };
      case "UPDATE_PRODUCT_STOCK_ACTION":
        return { text: 'Atualizar stock', color: 'warning' };
      case "DELETE_PRODUCT_ACTION":
        return { text: 'Eliminar produto', color: 'danger' };
      case "DELETE_USER_ACTION":
        return { text: 'Eliminar utilizador', color: 'danger' };
      default:
        return { text: actionString, color: 'secondary' };
    }
  }
  const createActionBagde = (action) => {
    return (
      <SoftBadge pill bg={action.color} >
        {action.text}</SoftBadge>
    )
  }

  

  return (
    <tr className="align-middle">
      <td className="text-nowrap">{id}</td>
      <td className="text-nowrap">{formatTimestamp(timestamp)}</td>

      <td className="text-nowrap">
        <div className="d-flex align-items-center">
          <Avatar size="l" name={user?.primeiroNome + ' ' + user?.ultimoNome} />
          <div className="ms-2">{user?.primeiroNome + ' ' + user?.ultimoNome}</div>
        </div>
      </td>
      <td>
        {createActionBagde (formatActionBadge(action))}
      </td>
      <td className="text-nowrap">{log}</td>
    </tr>





  );
};




export default HistoryTableRow;
