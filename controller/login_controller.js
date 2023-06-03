import LoginModel from "../model/login_model.js";

export default class LoginController{
    constructor(){
        this.loginModel= new LoginModel();
    }

    getLoginData(objData,email,pwd){
        let response =this.loginModel.getLoginData(objData);
        if(response!==null){
            let result= JSON.parse(response);
            if(email===result.email && pwd===result.pwd){
                return true;
            }
        }else{
            return false;
        }
    }

}