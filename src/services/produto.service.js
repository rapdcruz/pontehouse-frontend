import axios from "axios";
import AuthenticationService from "./authentication.service";
const PRODUTO_ROOT_URL = "https://pontehouse-backend.herokuapp.com/api/v1/produto";
const GET_BY_ID = "/{id}";
const GET_ALL = "/";
const UPDATE = "/";
const CREATE = "/";
const GET_ALL_BY_ACTIVE = "/?active={active}";
const GET_BY_LOW_STOCK = "/stock/low";
const UPDATE_STOCK = "/stock"




class ProdutoServiceImpl {

    getById(id, successCallbackFn, errorCallbackFn) {

        let config = {
            headers: {
                "Authorization": ("Bearer " + AuthenticationService.getUserFromStorage().token)
            }
        }

        let url = PRODUTO_ROOT_URL + GET_BY_ID.replace("{id}", id);
        axios.get(url, config)
            .then(res => {
                if (res.status === 200) {
                    
                    successCallbackFn(res.data);
                } else {
                    console.error("Error Web Service!");
                    errorCallbackFn(res);
                }
            })
            .catch(error => {
                console.log(error);
                errorCallbackFn(error);
            });
    }

    getAll(successCallbackFn, errorCallbackFn) {
        let config = {
            headers: {
                "Authorization": ("Bearer " + AuthenticationService.getUserFromStorage().token)
            }
        }

        let url = PRODUTO_ROOT_URL + GET_ALL;
        axios.get(url, config)
            .then(res => {
                if (res.status === 200) {
                    
                    successCallbackFn(res.data);
                } else {
                    console.error("Error Web Service!");
                    errorCallbackFn(res);
                }
            })
            .catch(error => {
                console.log(error);
                errorCallbackFn(error);
            });
    }


    getAllByActive(active, successCallbackFn, errorCallbackFn) {

        let config = {
            headers: {
                "Authorization": ("Bearer " + AuthenticationService.getUserFromStorage().token)
            }
        }

        let url = PRODUTO_ROOT_URL + GET_ALL_BY_ACTIVE.replace("{active}", active);
        axios.get(url, config)
            .then(res => {
                if (res.status === 200) {
                    
                    successCallbackFn(res.data);
                } else {
                    console.error("Error Web Service!");
                    errorCallbackFn(res);
                }
            })
            .catch(error => {
                console.log(error);
                errorCallbackFn(error);
            });
    }

    
    getByLowStock( successCallbackFn, errorCallbackFn) {

        let config = {
            headers: {
                "Authorization": ("Bearer " + AuthenticationService.getUserFromStorage().token)
            }
        }

        let url = PRODUTO_ROOT_URL + GET_BY_LOW_STOCK;
        axios.get(url, config)
            .then(res => {
                if (res.status === 200) {
                    
                    successCallbackFn(res.data);
                } else {
                    console.error("Error Web Service!");
                    errorCallbackFn(res);
                }
            })
            .catch(error => {
                console.log(error);
                errorCallbackFn(error);
            });
    }

    
    updateStock(produto, successCallbackFn, errorCallbackFn) {

        let config = {
            headers: {
                "Authorization": ("Bearer " + AuthenticationService.getUserFromStorage().token)
            }
        }

        const payload = {
            ...produto
        }

        let url = PRODUTO_ROOT_URL + UPDATE_STOCK;
        axios.put(url, payload, config)
            .then(res => {
                if (res.status === 200) {
                    
                    successCallbackFn(res.data);
                } else {
                    console.error("Error Web Service!");
                    errorCallbackFn(res);
                }
            })
            .catch(error => {
                console.log(error);
                errorCallbackFn(error);
            });
    }


    update(produto, successCallbackFn, errorCallbackFn) {

        let config = {
            headers: {
                "Authorization": ("Bearer " + AuthenticationService.getUserFromStorage().token)
            }
        }

        const payload = {
            ...produto
        }

        let url = PRODUTO_ROOT_URL + UPDATE;
        axios.put(url, payload, config)
            .then(res => {
                if (res.status === 200) {
                    
                    successCallbackFn(res.data);
                } else {
                    console.error("Error Web Service!");
                    errorCallbackFn(res);
                }
            })
            .catch(error => {
                console.log(error);
                errorCallbackFn(error);
            });
    }


    create(produto, successCallbackFn, errorCallbackFn) {

        let config = {
            headers: {
                "Authorization": ("Bearer " + AuthenticationService.getUserFromStorage().token)
            }
        }

        const payload = {
            ...produto
        }

        let url = PRODUTO_ROOT_URL + CREATE;
        axios.post(url, payload, config)
            .then(res => {
                if (res.status === 200) {
                    
                    successCallbackFn(res.data);
                } else {
                    console.error("Error Web Service!");
                    errorCallbackFn(res);
                }
            })
            .catch(error => {
                console.log(error);
                errorCallbackFn(error);
            });
    }






}

const ProdutoService = new ProdutoServiceImpl();

export default ProdutoService;
