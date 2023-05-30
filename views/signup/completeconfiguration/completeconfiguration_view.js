import RegisterController from "../../../controller/register_session_controller.js";

const d = document;
const registerController= new RegisterController();

d.addEventListener("click", e => {
    if (e.target.matches(".btn-session")) {
        registerController.closeSession();
        console.log("hola mundo sesion cerrada");
    }
});