import axios from "axios";
import AuthenticationService from './authentication.service';
const HISTORY_ROOT_URL = "https://pontehouse-backend.herokuapp.com/api/v1/historico";
const GET_BY_USER_ID = "/user/id/{id}";
const GET_BY_CURRENT_USER = "/user/current";
const GET_ALL = "/?limit={limit}";


class HistoryServiceImpl {

    getByUserId(userId, successCallbackFn, errorCallbackFn) {


        let config = {
            headers: {
                "Authorization": ("Bearer " + AuthenticationService.getUserFromStorage().token)
            }
        }

        let url = HISTORY_ROOT_URL + GET_BY_USER_ID.replace("{id}", userId);
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

    getAll(limit, successCallbackFn, errorCallbackFn) {

        let config = {
            headers: {
                "Authorization": ("Bearer " + AuthenticationService.getUserFromStorage().token)
            }
        }
        let url = HISTORY_ROOT_URL + GET_ALL.replace("{limit}",limit);
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






}

const HistoryService = new HistoryServiceImpl();

export default HistoryService;
