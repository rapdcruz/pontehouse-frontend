import { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import IconAlert from '../../components/common/IconAlert';
import ProdutoService from '../../services/produto.service';


const CreateOrUpdateProduto = ({ id = null, refreshParent }) => {
  const [newMode, setNewMode] = useState(true);
  const [produto, setProduto] = useState({});
  const [message, setMessage] = useState(null);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(null);

  const [formData, setFormData] = useState({});

  const successHandler = (data) => {
    setMessage(null);
    setProduto(data.result);
  };


  const errorHandler = (error) => {
    console.log(error);
    setMessage("Não foi possivel obter o produto com o id: " + id);
    setProduto(null);
  };



  useEffect(() => {
    setFormData({
      id: produto.id,
      ref: produto.ref,
      nome: produto.nome,
      max: produto.max,
      min: produto.min,
      stock: produto.stock,
      ativo: produto.ativo
    });
  }, [produto]);

  useEffect(() => {
    setFormData({
      id: 0,
      ref: "",
      nome: "",
      max: "",
      min: "",
      stock: "",
      ativo: true
    });
  }, [newMode]);




  useEffect(() => {
    if (id !== null) {
      setNewMode(false);
      ProdutoService.getById(id, successHandler, errorHandler);
    } else {
      setNewMode(true);
    }
  }, []);

  const successHandlerSave = (data) => {
    setProduto(data.result);
    setAlert({
      message: "Produto gravado com sucesso.",
      show: true,
      variant: "success"
    });
    if (typeof refreshParent === "function") {
      refreshParent();
    }
  }

  const errorHandlerSave = (error) => {
    console.error(error);

    setAlert({
      message: "Erro ao gravar o produto: " + error.response.data.message,
      show: true,
      variant: "danger"
    });
  }

  const handleChange = e => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  const handleSubmit = e => {
    e.preventDefault();
    //TODO: validar igual ao backend
    /* if (formData.newPassword != formData.confirmPassword) {
      setAlert({
        message: "A nova palavra passe deve ser igual à confirmação.",
        show: true,
        variant: "warning"
      });
      return;
    } */
    if (newMode) {
      ProdutoService.create(formData, successHandlerSave, errorHandlerSave);
    } else {
      ProdutoService.update(formData, successHandlerSave, errorHandlerSave);
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
      <Row className="mb-3 g-3">
        <Form.Group as={Col} lg={6} controlId="ref">
          <Form.Label>Referência</Form.Label>
          <Form.Control type="text" placeholder="Referência"
            value={formData.ref} name="ref" onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} lg={6} controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Nome"
            value={formData.nome} name="nome" onChange={handleChange} />
        </Form.Group>
      </Row>

      <Row className="mb-3 g-3">
        <Form.Group as={Col} lg={6} controlId="ref">
          <Form.Label>Minimo</Form.Label>
          <Form.Control type="text" placeholder="Minimo"
            value={formData.min} name="min" onChange={handleChange} />
        </Form.Group>
        <Form.Group as={Col} lg={6} controlId="max">
          <Form.Label>Máximo</Form.Label>
          <Form.Control type="text" placeholder="Máximo"
            value={formData.max} name="max" onChange={handleChange} />
        </Form.Group>
      </Row>

      <Row className="mb-3 g-3">
        <Form.Group as={Col} lg={6} controlId="stock">
          <Form.Label>Stock</Form.Label>
          <Form.Control type="text" placeholder="Stock"
            value={formData.stock} name="stock" onChange={handleChange} />
        </Form.Group>

        <Form.Group as={Col} lg={6} controlId="ativo">
          <Form.Label>Estado</Form.Label>
          <Form.Select name="ativo" value={formData.ativo} onSelect={() => console.log("onSelect")} onChange={(e) => { console.log("onChange"); handleChange(e) }} aria-label="Estado">
            <option value="true">Ativo</option>
            <option value="false">Inativo</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <div className="text-end">
        <Button variant="outline-success" className="mt-2 mb-1 w-100"
          onClick={() => setShow(true)} type="submit">
          {newMode ? "Criar Produto" : "Atualizar Produto"}
        </Button>
      </div>
    </Form>
  );
};

export default CreateOrUpdateProduto;
