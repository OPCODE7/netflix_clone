

d.addEventListener("DOMContentLoaded", e => {
    let getSession= localStorage.getItem("user");
    if(getSession!==null){
        const $signupEmail= d.querySelectorAll("#signup-email");
        const $buttonStartSuscription= d.querySelectorAll(".button-started");
        const $btnSession= d.querySelector(".btn-session");
        $btnSession.textContent="Cerrar Sesión";
        $buttonStartSuscription.forEach(button => button.textContent= "Completar Suscripción");
        

        $signupEmail.forEach(email => {
            email.classList.add("d-none");
            email.nextElementSibling.classList.add("d-none");
        });
    }
});

