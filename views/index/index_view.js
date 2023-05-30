import RegisterController from "../../controller/register_session_controller.js";

const d = document;

const registerController = new RegisterController();

d.addEventListener("click", e => {
    if (e.target.matches(".accordion-button")) {
        e.target.querySelector(".fa-plus").classList.toggle("rotate-acordion-icon")
    }

    if (e.target.matches(".button-started")){
        e.preventDefault();
        const $emailInput = e.target.parentElement.firstElementChild.querySelector("#signup-email");
        const $validMessage = e.target.previousElementSibling;

        let response = registerController.saveSession($emailInput.value);

        if (!response) {
            $emailInput.focus();
            $validMessage.classList.remove("d-none");
        }else{
            $validMessage.classList.add("d-none");
        }
    }

    if(e.target.matches(".btn-session")){
        if(e.target.textContent==="Cerrar Sesión"){
            registerController.closeSession();
        }
    }
});

d.addEventListener("DOMContentLoaded", e => {
    let existSession= registerController.getSession();
    const $signupEmail= d.querySelectorAll("#signup-email");
    const $buttonStartSuscription= d.querySelectorAll(".button-started");
    const $btnSession= d.querySelector(".btn-session");
    if(existSession){
        $btnSession.textContent="Cerrar Sesión";
        $btnSession.href= "index.html";
        $buttonStartSuscription.forEach(button => button.textContent= "Completar Suscripción");
        
        $signupEmail.forEach(email => {
            email.classList.add("d-none");
            email.nextElementSibling.classList.add("d-none");
        });
    }
});
