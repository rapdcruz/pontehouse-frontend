import axios from "axios";
import UtilizadorService from './utilizador.service';

const AUTHENTICATION_ROOT_URL = "https://pontehouse-backend.herokuapp.com/api/v1/authentication";
const LOGIN_URL = AUTHENTICATION_ROOT_URL + "/login";

class AuthenticationServiceImpl {

    login(username, password, remember, successCallbackFn, errorCallbackFn) {
        const payload = {
            username: username,
            password: password
        }
        axios.post(LOGIN_URL, payload)
            .then(res => {
                if (res.status === 200) {
                    

                    if (remember) {
                        localStorage.setItem("user", JSON.stringify(res.data.result));
                    } else {

                        window.sessionStorage.setItem("user", JSON.stringify(res.data.result));
                    }
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
    updateStorageUser() {
        UtilizadorService.getById(this.getUserFromStorage().id,
            (data) => {
                let token = this.getUserFromStorage().token;
                let newUser = data.result;
                newUser.token = token;
                let user = window.sessionStorage.getItem("user");
                if (user) {
                    window.sessionStorage.setItem("user", JSON.stringify(newUser));
                    return;
                }
                localStorage.setItem("user", JSON.stringify(newUser));
            },
            (error) => {
                console.error(error);
            });
    }

    getUserFromStorage() {
        let user = window.sessionStorage.getItem("user");
        if (user) {
            return JSON.parse(user);
        }
        user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            return JSON.parse(user);
        }
        return null;
    }

    logout() {
        window.sessionStorage.removeItem("user");
        localStorage.removeItem("user");
    }

    isAuthenticated() {
        return !!this.getUserFromStorage();
    }
    isAdminstrator() {
        return !!this.getUserFromStorage() && this.getUserFromStorage().cargoId == 1;
    }
}

const AuthenticationService = new AuthenticationServiceImpl();

export default AuthenticationService;

