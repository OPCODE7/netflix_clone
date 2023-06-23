import { Form } from "../js/helper/form.js";
import RegisterEmailModel from "../model/register_email_temporal_model.js";
import RegisterUserModel from "../model/register_user_model.js";

export default class RegisterEmailController {
    constructor() {
        this.registerEmailModel = new RegisterEmailModel();
        this.registerUserModel= new RegisterUserModel();
        this.form = new Form();

    }

    saveEmail(data) {
        if (this.form.validEmail(data)){
            let existSession= JSON.parse(this.registerUserModel.getDataUser());
            existSession.forEach(el => {
                if(el.email===data){
                    location.href = "views/signup/registerform/regform.html";
                }else{
                    location.href= "views/signup/completeconfiguration/completeconfiguration.html";
                }
            });
            
            this.registerEmailModel.saveFlagExistEmail(data);
            return true;
        } else {
            return false;
        }
    }

    getEmailStorage() {
        return this.registerEmailModel.getEmailStorage();
    }

}