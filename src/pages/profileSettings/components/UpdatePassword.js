import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import UtilizadorService from '../../../services/utilizador.service';
import IconAlert from '../../../components/common/IconAlert';
import AuthenticationService from '../../../services/authentication.service';



const UpdatePassword = ({ userId = null }) => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });


  const [alert, setAlert] = useState(null);


  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const successHandler = (data) => {
    AuthenticationService.updateStorageUser();
    setAlert({
      message: "Password alterada com sucesso.",
      show: true,
      variant: "success"
    });
  }

  const errorHandler = (error) => {
    setAlert({
      message: "Erro ao alterar a password.",
      show: true,
      variant: "danger"
    });
    console.error(error);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (formData.newPassword != formData.confirmPassword) {
      setAlert({
        message: "A nova palavra passe deve ser igual à confirmação.",
        show: true,
        variant: "warning"
      });
      return;
    }
    if (userId!=null) {
      UtilizadorService.updatePasswordByUserId(userId, formData.oldPassword, formData.newPassword, successHandler, errorHandler)

    } else {
      UtilizadorService.updatePassword(formData.oldPassword, formData.newPassword, successHandler, errorHandler)
    }

  };

  return (
    <Form onSubmit={handleSubmit}>
      {
        alert && alert.show &&
        <IconAlert
          variant={alert.variant}
          dismissible={true}
          onClose={() => setAlert(null)}>
          {alert.message}
        </IconAlert>
      }
      <Form.Group className="mb-3" controlId="oldPassword">
        <Form.Label>Palavra-passe antiga</Form.Label>
        <Form.Control
          type="password"
          value={formData.oldPassword}
          name="oldPassword"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="newPassword">
        <Form.Label>Nova palavra-passe </Form.Label>
        <Form.Control
          type="password"
          value={formData.newPassword}
          name="newPassword"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirmar palavra-passe</Form.Label>
        <Form.Control
          type="password"
          value={formData.confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="outline-success" className="mt-2 mb-1 w-100" type="submit">
        Alterar palavra-passe
      </Button>


    </Form>
  );
};

export default UpdatePassword;
