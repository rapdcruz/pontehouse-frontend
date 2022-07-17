import axios from "axios";
import AuthenticationService from './authentication.service';
const CARGO_ROOT_URL = "https://pontehouse-backend.herokuapp.com/api/v1/cargo";
const GET_ALL = "/";


class CargoServiceImpl {
    getAll(successCallbackFn, errorCallbackFn) {

        let config = {
            headers: {
                "Authorization": ("Bearer " + AuthenticationService.getUserFromStorage().token)
            }
        }
        let url = CARGO_ROOT_URL + GET_ALL;
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

  /*   
    getByCurrentUser( successCallbackFn, errorCallbackFn) {
        let config = {
            headers: {
                "Authorization": ("Bearer " + AuthenticationService.getUserFromStorage().token)
            }
        }
        let url = HISTORY_ROOT_URL + GET_BY_CURRENT_USER;
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

 */




}

const CargoService = new CargoServiceImpl();

export default CargoService;
