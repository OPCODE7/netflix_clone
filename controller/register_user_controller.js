import { Form } from "../js/helper/form.js";
import RegisterUserModel from "../model/register_user_model.js";


export default class RegisterUserController{
    constructor(){
        this.registerUserModel= new RegisterUserModel();
        this.form= new Form();
    }

    saveData(data){
        if(!this.form.validEmail(data.email)){
            return "email invalid";
        }else if(!this.form.validPassword(data.pwd)){
            return "pwd invalid";
        }else{
            this.registerUserModel.saveData(JSON.stringify(data));
            return "success";
        }
    }

}