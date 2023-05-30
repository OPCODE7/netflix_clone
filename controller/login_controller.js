import { Form } from "../js/helper/form.js";
import LoginModel from "../model/login_model.js";

export default class LoginController{
    constructor(){
        this.loginModel= new LoginModel();
        this.form= new Form();
    }

    saveSession(email){
        if(localStorage.getItem("user")===null){
            if(this.form.validEmail(email)){
                this.loginModel.saveSession(email);
                window.location.href= "views/signup/completeconfiguration/completeconfiguration.html";
                return true;
            }else{
                return false;
            }
        }else{
            window.location.href= "views/signup/completeconfiguration/completeconfiguration.html";
            return true;
        }
    }

    getSession(){
        let getSession= this.loginModel.getSession();
        return getSession !== null ? true : false;

    }

}