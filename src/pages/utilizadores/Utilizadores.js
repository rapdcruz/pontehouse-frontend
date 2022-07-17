import React, { useEffect, useState } from 'react';
import { Card, Dropdown, Table, Modal, CloseButton, Badge, Button } from 'react-bootstrap';
import Avatar from '../../components/common/Avatar';
import UtilizadoresTableHeader from './components/UtilizadoresTableHeader';
import ActionButton from '../../components/common/ActionButton';
import UtilizadorService from '../../services/utilizador.service';
import CreateOrUpdateUtilizador from './components/CreateOrUpdateUtilizador';
import CargoService from '../../services/cargo.service';
import IconAlert from '../../components/common/IconAlert';
import PageHeader from '../../components/common/PageHeader';
import SoftBadge from '../../components/common/SoftBadge';
import UpdatePassword from '../profileSettings/components/UpdatePassword';





const Utilizadores = () => {

  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState(null);

  const [userId, setUserId] = useState(0);


  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showUpdatePasswordModal, setShowUpdatePasswordModal] = useState(false);

  const [fullscreen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleCloseModalDelete = () => setShowDeleteModal(false);
  const handleShowModalDelete = () => setShowDeleteModal(true);
  const [cargos, setCargos] = useState([]);
  const [alert, setAlert] = useState(null);




  const handleConfirmModalDelete = () => {
    let user = users.find(p => p.id == userId);
    let userChanges = {
      ...user,
      ativo: false
    }
    UtilizadorService.update(userChanges,
      () => {
        setShowDeleteModal(false);
        refreshData();
        setAlert({
          message: "Utilizador removido com sucesso ",
          show: true,
          variant: "success"
        });
        setShowDeleteModal(false);


      },
      (error) => {
        console.error(error);
        setAlert({
          message: "Erro ao eliminar o utilizador: " + error.response.data.message,
          show: true,
          variant: "danger"
        });
        setShowDeleteModal(false);
      })
  }
  const refreshData = () => {
    UtilizadorService.getAll(
      (data) => {
        setUsers(data.result);
        setMessage(null);
      },
      (error) => {
        setUsers([]);
        setMessage("Não foi possível obter a lista de produtos.");
      });

    CargoService.getAll(
      (data) => setCargos(data.result),
      (error) => {
        setCargos([]);
        console.error(error);
      });

  }



  useEffect(() => {
    refreshData();
  }, []);

  const getCargoNome = (id) => {
    const cargo = cargos.find(cargo => cargo.id === id);
    return cargo ? cargo.nome : id;
  }







  return (
    <>
      <PageHeader
        title="Utilizadores"
        description="Aqui podes consultar, editar, e remover utilizadores da API."
        className="mb-3">
      </PageHeader>

      <Card className="mb-3">

        <Card.Header>
          <UtilizadoresTableHeader table refreshData={refreshData} />
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
                <th scope="col">Nome</th>
                <th scope="col">Username</th>
                <th scope="col">Cargo</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
            <tbody>
              {users && users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>

                  <td>
                    <div className="d-flex align-items-center">
                      <Avatar size="l" name={user?.primeiroNome + ' ' + user?.ultimoNome} />
                      <div className="ms-2">{user?.primeiroNome + ' ' + user?.ultimoNome}</div>
                    </div>
                  </td>
                  <td>{user.username}</td>
                  <td>{getCargoNome(user.cargoId)}</td>
                  <td><SoftBadge pill bg={user.ativo ? "primary" : "secondary"} >
                    {user.ativo ? "Ativo" : "Inativo"}</SoftBadge>
                  </td>
                  <td >
                    <ActionButton
                      icon="lock"
                      title="Change Password"
                      variant="action"
                      onClick={() => { setUserId(user.id); setShowUpdatePasswordModal(true); }}
                      className="p-0 me-2" />
                    <ActionButton
                      icon="edit"
                      title="Edit"
                      variant="action"
                      onClick={() => { setUserId(user.id); setShowUpdateModal(true); }}
                      className="p-0 me-2" />
                    <ActionButton
                      icon="trash-alt"
                      title="Delete"
                      variant="action"
                      onClick={() => { setUserId(user.id); handleShowModalDelete(true); }}
                      className="p-0" />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
        {/* MODAL UPDATE PASSWORD */}
        <Modal show={showUpdatePasswordModal} size="lg" fullscreen={fullscreen} onHide={() => setShowUpdatePasswordModal(false)}>
          <Modal.Header className="bg-light border-2 border-success">
            <Modal.Title className="text-800">Atualizar Utilizador</Modal.Title>
            <CloseButton
              className="btn btn-circle btn-sm transition-base p-0"
              onClick={() => setShowUpdatePasswordModal(false)}
            />
          </Modal.Header>
          <Modal.Body className='m-3'>
            <UpdatePassword userId={userId}></UpdatePassword>
          </Modal.Body>

        </Modal>

        {/* MODAL UPDATE UTILIZADOR */}
        <Modal show={showUpdateModal} size="lg" fullscreen={fullscreen} onHide={() => setShowUpdateModal(false)}>
          <Modal.Header className="bg-light border-2 border-success">
            <Modal.Title className="text-800">Atualizar Utilizador</Modal.Title>
            <CloseButton
              className="btn btn-circle btn-sm transition-base p-0"
              onClick={() => setShowUpdateModal(false)}
            />
          </Modal.Header>
          <Modal.Body className='m-3'>
            <CreateOrUpdateUtilizador id={userId} /* refreshParent={refreshData} */ />
          </Modal.Body>

        </Modal>
        {/* MODAL DELETE UTILIZADOR */}
        <Modal show={showDeleteModal}
          onHide={handleCloseModalDelete}
          backdrop="static"
          keyboard={false}>
          <Modal.Header className="bg-light border-2 border-success">
            <Modal.Title className="text-800">Eliminar Utilizador</Modal.Title>
            <CloseButton onClick={handleCloseModalDelete} />
          </Modal.Header>
          <Modal.Body className='m-3'>

            Tem a certeza que pretende eliminar o utilizador com o id: {userId}?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={handleCloseModalDelete}>
              Cancelar
            </Button>
            <Button variant="outline-success" onClick={handleConfirmModalDelete} > Confirmar</Button>
          </Modal.Footer>
        </Modal>



      </Card >
    </>
  );
};

export default Utilizadores;
