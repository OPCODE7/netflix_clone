import RegisterEmailController from "../../controller/register_email_temporal_controller.js";
import RegisterUserController from "../../controller/register_user_controller.js";

const d = document;

const registerEmailController = new RegisterEmailController();
const registerUserController= new RegisterUserController();

d.addEventListener("click", e => {
    if (e.target.matches(".accordion-button")) {
        e.target.querySelector(".fa-plus").classList.toggle("rotate-acordion-icon")
    }

    if (e.target.matches(".button-started")){
        e.preventDefault();

        if(e.target.textContent!=="Completar Suscripción"){
            const $emailInput = e.target.parentElement.firstElementChild.querySelector("#signup-email");
            const $validMessage = e.target.previousElementSibling;
    
            let response = registerEmailController.saveEmail($emailInput.value);
    
            if (!response) {
                $emailInput.focus();
                $validMessage.classList.remove("d-none");
            }else{
                $validMessage.classList.add("d-none");
            }
        }else{
            location.href= "/views/signup/selectplan/selectplan.html";
        }
    }

    if(e.target.matches(".btn-session")){
        if(e.target.textContent==="Cerrar Sesión"){
            registerUserController.closeSession();
        }
    }
});

d.addEventListener("DOMContentLoaded", e => {
    let existSession= registerUserController.getSession();
    const $signupEmail= d.querySelectorAll("#signup-email");
    const $buttonStartSuscription= d.querySelectorAll(".button-started");
    const $btnSession= d.querySelector(".btn-session");
    if(existSession!==null){
        $btnSession.textContent="Cerrar Sesión";
        $btnSession.href= "index.html";
        $buttonStartSuscription.forEach(button => button.textContent= "Completar Suscripción");
        
        $signupEmail.forEach(email => {
            email.classList.add("d-none");
            email.nextElementSibling.classList.add("d-none");
        });
    }
});
