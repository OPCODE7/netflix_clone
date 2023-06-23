import RegisterController from "../../../controller/register_email_temporal_controller.js";
import RegisterUserController from "../../../controller/register_user_controller.js";
import { Form } from "../../../js/helper/form.js";

const d = document;
const registerController = new RegisterController();
const form = new Form();
const $email = d.getElementsByName("email")[0];
const $pwd = d.getElementsByName("pwd")[0];
const $emailValidateMessage = $email.parentElement.nextElementSibling;
const $pwdValidateMessage = $pwd.parentElement.nextElementSibling;
const registerUserController = new RegisterUserController();
const $emailExistContainer = $email.parentElement.previousElementSibling;
let pwd= "";

d.addEventListener("DOMContentLoaded", e => {
    let existEmail = registerController.getEmailStorage();
    let existSession = JSON.parse(registerUserController.getDataUser());
    const $formTitle = d.getElementById("form-title");
    const $formSubTitle = d.getElementById("form-subtitle");

    if (existEmail !== null) $email.value = existEmail;
    
    existSession.forEach(el => {
        if(el.email===existEmail){
            $email.parentElement.classList.add("d-none");
            $formTitle.innerHTML= "¡Hola de nuevo! <br> Suscribirte a Netflix es fácil.";
            $formSubTitle.textContent= "Ingresa tu contraseña para comenzar a ver al instante.";
            $emailExistContainer.classList.remove("d-none");
            $emailExistContainer.lastElementChild.textContent= existEmail;
            d.querySelector("#btn-register-user").id= "btn-start-session";
            pwd= el.pwd;
        }
    });
    
});

d.addEventListener("click", e => {
    if (e.target.matches(".btn-session")) {
        registerController.closeSession();
    }

    if (e.target.matches("#btn-register-user")) {
        let data = {
            "email": $email.value,
            "pwd": $pwd.value
        };
        let response = registerUserController.saveDataUser(data);

        if (response === "email invalid") {
            $email.focus();
            $emailValidateMessage.classList.remove("d-none");
            form.invalidDataStyleBorder($email.parentElement);
        } else if (response === "pwd invalid") {
            $pwd.focus();
            $pwdValidateMessage.classList.remove("d-none");
            form.invalidDataStyleBorder($pwd.parentElement);
        } else {
            registerUserController.saveSession(data);
            e.target.href = "../selectplan/selectplan.html";
        }
    }
    
    if(e.target.matches("#btn-start-session")){
        if(!form.validPassword($pwd.value)){
            $pwd.focus();
            $pwdValidateMessage.classList.remove("d-none");
            form.invalidDataStyleBorder($pwd.parentElement);
        }else if($pwd.value===pwd){
            registerUserController.saveSession({"email": $emailExistContainer.lastElementChild.textContent,
            "pwd": $pwd.value});
            e.target.href = "../selectplan/selectplan.html";
        }else{
            $pwd.focus();
            $pwdValidateMessage.classList.remove("d-none");
            $pwdValidateMessage.textContent= "Contraseña incorrecta";
            form.invalidDataStyleBorder($pwd.parentElement);
        }
        
    }

});



