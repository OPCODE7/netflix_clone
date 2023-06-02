import RegisterController from "../../../controller/register_session_controller.js";
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

d.addEventListener("click", e => {
    if (e.target.matches(".btn-session")) {
        registerController.closeSession();
    }

    if (e.target.matches("#btn-register-user")) {
        let data = {
            "email": $email.value,
            "pwd": $pwd.value
        };
        let response = registerUserController.saveData(data);

        if (response === "email invalid") {
            $email.focus();
            $emailValidateMessage.classList.remove("d-none");
            form.invalidDataStyleBorder($email.parentElement);
        } else if (response === "pwd invalid") {
            $pwd.focus();
            $pwdValidateMessage.classList.remove("d-none");
            form.invalidDataStyleBorder($pwd.parentElement);
        } else {
            registerUserController.saveData(data);
            console.log("success")
            e.target.href = "../selectplan/selectplan.html";
        }
    }
});