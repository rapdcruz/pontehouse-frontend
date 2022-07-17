import axios from "axios";
import AuthenticationService from "./authentication.service";
const UTILIZADOR_ROOT_URL = "https://pontehouse-backend.herokuapp.com/api/v1/utilizador";
const GET_BY_ID = "/{id}";
const GET_ALL = "/";
const UPDATE_PASSWORD = "/password"
const CREATE = "/"
const UPDATE = "/"
const UPDATE_PASSWORD_BY_USER_ID = "/{id}/password"





class UtilizadorServiceImpl {

    getById(userId, successCallbackFn, errorCallbackFn) {

        let config = {
            headers: {
                "Authorization": ("Bearer " + AuthenticationService.getUserFromStorage().token)
            }
        }

        let url = UTILIZADOR_ROOT_URL + GET_BY_ID.replace("{id}", userId);
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

        let url = UTILIZADOR_ROOT_URL + GET_ALL;
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





    updatePassword(oldPassword, newPassword, successCallbackFn, errorCallbackFn) {

        let config = {
            headers: {
                "Authorization": ("Bearer " + AuthenticationService.getUserFromStorage().token)
            }
        }

        const payload = {
            oldPassword: oldPassword,
            newPassword: newPassword
        }

        let url = UTILIZADOR_ROOT_URL + UPDATE_PASSWORD;
        axios.put(url, payload, config)
            .then(res => {
                if (res.status === 204) {
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

    updatePasswordByUserId(userId, oldPassword, newPassword, successCallbackFn, errorCallbackFn) {

        let config = {
            headers: {
                "Authorization": ("Bearer " + AuthenticationService.getUserFromStorage().token)
            }
        }

        const payload = {
            oldPassword: oldPassword,
            newPassword: newPassword
        }

        let url = UTILIZADOR_ROOT_URL + UPDATE_PASSWORD_BY_USER_ID.replace("{id}", userId);
        axios.put(url, payload, config)
            .then(res => {
                if (res.status === 204) {
                    
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
    create(user, successCallbackFn, errorCallbackFn) {

        let config = {
            headers: {
                "Authorization": ("Bearer " + AuthenticationService.getUserFromStorage().token)
            }
        }

        const payload = {
            ...user
        }

        let url = UTILIZADOR_ROOT_URL + CREATE;
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

    update(user, successCallbackFn, errorCallbackFn) {

        let config = {
            headers: {
                "Authorization": ("Bearer " + AuthenticationService.getUserFromStorage().token)
            }
        }

        const payload = {
            ...user
        }

        let url = UTILIZADOR_ROOT_URL + UPDATE;
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






}

const UtilizadorService = new UtilizadorServiceImpl();

export default UtilizadorService;
