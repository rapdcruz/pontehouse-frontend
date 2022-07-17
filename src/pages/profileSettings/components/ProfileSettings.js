import React, { useState } from 'react';
import { Button, Card, Col, Form, Row, Modal, CloseButton } from 'react-bootstrap';
import CardHeader from '../../../components/common/CardHeader';
import AuthenticationService from '../../../services/authentication.service';
import UpdatePassword from './UpdatePassword';

const ProfileSettings = () => {
  const currentUser = AuthenticationService.getUserFromStorage();

  const [fullscreen] = useState(false);
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    firstName: currentUser.primeiroNome,
    lastName: currentUser.ultimoNome,
    username: currentUser.username,
    cargo: currentUser.cargoId
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  

  return (
    <Card>
      <CardHeader title="Dados do Utilizador" />
      <Card.Body className="bg-light ">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3 g-3">
            <Form.Group as={Col} lg={6} controlId="firstName">
              <Form.Label>
                Primeiro Nome
              </Form.Label>
              <Form.Control
                disabled="true"
                type="text"
                placeholder="Primeiro Nome"
                value={formData.firstName}
                name="firstName"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} lg={6} controlId="lastName">
              <Form.Label>Último Nome</Form.Label>
              <Form.Control
                disabled="true"

                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                name="lastName"
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3 g-3">
            <Form.Group as={Col} lg={6} controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                disabled="true"
                type="text"
                placeholder="Username"
                value={formData.username}
                name="username"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col} lg={6} controlId="cargo">
              <Form.Label>Cargo</Form.Label>
              <Form.Control
                disabled="true"
                type="text"
                placeholder="Cargo"
                value={formData.cargo}
                name="heading"
                onChange={handleChange}
              />
            </Form.Group>
          </Row>
          <div className="text-end">
            <Button variant="outline-success" className="mt-2 mb-1 w-100" onClick={() => setShow(true)}  type="submit">
              Atualizar Password
            </Button>
          </div>
        </Form>
      </Card.Body>


      <Modal className='' show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header className="bg-light border-2 border-success">
          <Modal.Title className="text-800 fs-2 ">Atualizar palavra-passe</Modal.Title>
          <CloseButton
            className="btn btn-circle btn-sm transition-base p-0"
            onClick={() => setShow(false)}
          />
        </Modal.Header>
        <Modal.Body className='m-3'>
          <UpdatePassword />
        </Modal.Body>
      </Modal>


    </Card>
  );
};

export default ProfileSettings;
