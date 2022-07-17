import { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import IconAlert from '../../../components/common/IconAlert';
import CargoService from '../../../services/cargo.service';
import UtilizadorService from '../../../services/utilizador.service';


const CreateOrUpdateUtilizador = ({ id = null, refreshParent }) => {
    const [newMode, setNewMode] = useState(true);
    const [user, setUser] = useState({});
    const [message, setMessage] = useState(null);
    const [show, setShow] = useState(false);
    const [alert, setAlert] = useState(null);
    const [cargos, setCargos] = useState([]);


    const [formData, setFormData] = useState({});

    const successHandler = (data) => {
        setMessage(null);
        setUser(data.result);
    };


    const errorHandler = (error) => {
        console.log(error);
        setMessage("Não foi possivel obter o utilizador com o id: " + id);
        setUser(null);
    };



    useEffect(() => {
        setFormData({
            id: user.id,
            username: user.username,
            primeiroNome: user.primeiroNome,
            ultimoNome: user.ultimoNome,
            ativo: user.ativo,
            cargoId: user.cargoId




        });
    }, [user]);

    useEffect(() => {
        setFormData({
            id: 0,
            username: "",
            primeiroNome: "",
            ultimoNome: "",
            ativo: true,
            cargoId: 2
        });
    }, [newMode]);

    




    useEffect(() => {
        if (id !== null) {
            setNewMode(false);
            UtilizadorService.getById(id, successHandler, errorHandler);
        } else {
            setNewMode(true);
        }
        CargoService.getAll(
            (data) => setCargos(data.result),
            (error) => {
                setCargos([]);
                console.error(error);
            });
    }, []);

    const successHandlerSave = (data) => {
        setUser(data.result);
        setAlert({
            message: "Utilizador gravado com sucesso.",
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
            message: "Erro ao gravar o utilizador: " + error.response.data.message,
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
            UtilizadorService.create(formData, successHandlerSave, errorHandlerSave);
        } else {
            UtilizadorService.update(formData, successHandlerSave, errorHandlerSave);
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
                <Form.Group as={Col} lg={6} controlId="primeiroNome">
                    <Form.Label>Primeiro Nome</Form.Label>
                    <Form.Control type="text" placeholder="Primeiro Nome"
                        value={formData.primeiroNome} name="primeiroNome" onChange={handleChange} />
                </Form.Group>
                <Form.Group as={Col} lg={6} controlId="ultimoNome">
                    <Form.Label>Ultimo Nome</Form.Label>
                    <Form.Control type="text" placeholder="Ultimo Nome"
                        value={formData.ultimoNome} name="ultimoNome" onChange={handleChange} />
                </Form.Group>
            </Row>

            <Row className="mb-3 g-3">
                <Form.Group as={Col} lg={6} controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username"
                        value={formData.username} name="username" onChange={handleChange} />
                </Form.Group>
                <Form.Group as={Col} lg={6} controlId="ativo">
                    <Form.Label>Estado</Form.Label>
                    <Form.Select name="ativo" value={formData.ativo} onSelect={() => console.log("onSelect")} onChange={(e) => { console.log("onChange"); handleChange(e) }} aria-label="Estado">
                        <option value="true">Ativo</option>
                        <option value="false">Inativo</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row className="mb-3 g-3">
                <Form.Group as={Col} lg={6} controlId="cargoId">
                    <Form.Label>Cargo</Form.Label>
                    <Form.Select name="cargoId" value={formData.cargoId} onSelect={() => console.log("onSelect")} onChange={(e) => { console.log("onChange"); handleChange(e) }} aria-label="Cargo">
                        {
                            cargos.map(cargo => {
                                return (
                                    <option value={cargo.id}>{cargo.nome}</option>
                                )
                            })
                        }

                    </Form.Select>
                </Form.Group>
            </Row>
            <div className="text-end">
                <Button onClick={() => setShow(true)} variant="outline-success" className="w-100" type="submit">
                    {newMode ? "Criar Utilizador" : "Atualizar Utilizador"}
                </Button>

            </div>
        </Form>

    );
};

export default CreateOrUpdateUtilizador;
