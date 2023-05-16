import { validEmail } from "./forms.js";

const d= document;

d.addEventListener("click", e=> {
    if(e.target.matches(".accordion-button")){
        e.target.querySelector(".fa-plus").classList.toggle("rotate-acordion-icon")
    }

    if(e.target.matches(".button-started")){
        e.preventDefault();
        const $emailInput= e.target.parentElement.firstElementChild.querySelector("#signup-email");
        const $validMessage= e.target.previousElementSibling;
        if(!validEmail($emailInput.value)){
            $emailInput.focus();
            $validMessage.classList.remove("d-none");
            
        }else{
            window.location.href= "pages/signup/completeconfiguration.html";
            $validMessage.classList.add("d-none");
        }
    }
});