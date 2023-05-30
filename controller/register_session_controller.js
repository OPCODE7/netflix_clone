import { Form } from "../js/helper/form.js";
import RegisterModel from "../model/register_session_model.js";

export default class RegisterController{
    constructor(){
        this.registerModel= new RegisterModel();
        this.form= new Form();
    }

    saveSession(email){
        if(this.registerModel.getSession()===null){
            if(this.form.validEmail(email)){
                this.registerModel.saveSession(email);
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
        let getSession= this.registerModel.getSession();
        return getSession !== null ? true : false;
    }

    closeSession(){
        if(this.registerModel.getSession()!==null){
            this.registerModel.closeSession();
        }
    }

}