import LoginController from "../../controller/login_controller.js";
import { Form } from "../../js/helper/form.js";

const d= document;
const form= new Form();
const $email= d.getElementsByName("email")[0];
const $pwd= d.getElementsByName("pwd")[0];
const $emailValidMessage= $email.parentElement.nextElementSibling;
const $pwdValidMessage= $pwd.parentElement.nextElementSibling;
const loginController= new LoginController();

d.addEventListener("click",e => {
    if(e.target.matches("#login-btn")){

        if(!form.validEmail($email.value)){
            $email.focus();
            $emailValidMessage.classList.remove("d-none");
            form.invalidDataStyleBorder($email.parentElement);
        }else if(!form.validPassword($pwd.value)){
            $pwd.focus();
            $pwdValidMessage.classList.remove("d-none");
            form.invalidDataStyleBorder($pwd.parentElement);
        }else{
            let response= loginController.getLoginData("data-user",$email.value,$pwd.value);
            console.log(response);
            if(response){
                location.href= "views/ver";
                console.log("hola")
            }else{
                alert("Usuario o contraseña incorrecta");
            }
        }
    }
});
