import { Form } from "../js/helper/form.js";
import RegisterUserModel from "../model/register_user_model.js";


export default class RegisterUserController{
    constructor(){
        this.registerUserModel= new RegisterUserModel();
        this.form= new Form();
    }

    saveDataUser(data){
        let sessions= JSON.parse(this.registerUserModel.getDataUser());
        let arraySession= [data];

        if(!this.form.validEmail(data.email)){
            return "email invalid";
        }else if(!this.form.validPassword(data.pwd)){
            return "pwd invalid";
        }else{
            if(sessions!==null){

                this.registerUserModel.saveDataUser(JSON.stringify([...sessions,...arraySession]));
            }else{
                this.registerUserModel.saveDataUser(JSON.stringify(arraySession));
            }
            return "success";
        }
    }

    saveSession(data){
        this.registerUserModel.saveSession(JSON.stringify(data));
    }

    getDataUser(){
        let getDataUser= this.registerUserModel.getDataUser();
        return getDataUser;
    }

    getSession(){
        let getSession= this.registerUserModel.getSession();
        return getSession;
    }

    closeSession(){
        if(this.registerUserModel.getDataUser()!==null){
            this.registerUserModel.closeSession();
        }
    }

}