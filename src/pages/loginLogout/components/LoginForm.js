import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Button, Form, Row, Col, Alert, FloatingLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from "../../../services/authentication.service";

const LoginForm = ({ hasLabel, layout }) => {
  // State
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: false
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const loginSuccessCallback = (data) => {
    navigate("/private/admin", { replace: true })
  }

  const loginErrorCallback = (data) => {
    setMessage(data.response.data.message);

  }
  // Handler
  const handleSubmit = e => {
    e.preventDefault();
    AuthenticationService.login(formData.username, formData.password, formData.remember, loginSuccessCallback, loginErrorCallback)
    toast.success(`Logged in as ${formData.username}`, {
      theme: 'colored'
    });
  };

  const handleFieldChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel label="Username" className="mb-3">
        <Form.Control value={formData.username} name="username" type="text" onChange={handleFieldChange} color="success" />
      </FloatingLabel>

      <FloatingLabel label="Palavra-passe" className="mb-3">
        <Form.Control value={formData.password} name="password" type="password" onChange={handleFieldChange} />
      </FloatingLabel>

      <Row className="justify-content-between align-items-center">
        <Col xs="auto">
          <Form.Check type="checkbox" id="rememberMe">
            <Form.Check.Input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={e =>
                setFormData({
                  ...formData,
                  remember: e.target.checked
                })
              }
            />
            <Form.Check.Label className="mb-0">Remember Me</Form.Check.Label>
          </Form.Check>
        </Col>

      </Row>
      <Row>
        {
          message &&
          <Alert variant={"danger"}>
            {message}
          </Alert>
        }

      </Row>
      <Form.Group>
        <Button
          type="submit"
          variant="outline-success"
          className="mt-2 mb-1 w-100"          
          disabled={!formData.username || !formData.password}
        >
          Entrar
        </Button>
      </Form.Group>


    </Form>
  );
};

LoginForm.propTypes = {
  layout: PropTypes.string,
  hasLabel: PropTypes.bool
};

LoginForm.defaultProps = {
  layout: 'simple',
  hasLabel: false
};

export default LoginForm;
