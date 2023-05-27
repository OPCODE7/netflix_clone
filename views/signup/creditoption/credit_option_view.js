import TranslateGoogleController from "../../../controller/translate_google_feature_controller.js";
import { Form } from "../../../js/helper/form.js";

const d = document;

const translateGoogleController = new TranslateGoogleController();
const form = new Form();

const $buttonTranslate = d.querySelector("#google_translate_element");
let google_script_url = "//translate.google.com/translate_a/element.js";
let script = d.querySelector("script[src*='" + google_script_url + "']");
const $creditInput = d.getElementsByName("credit-card")[0];
const $dateExpiry = d.getElementsByName("date-expiry")[0];
const $cvv = d.getElementsByName("cvv")[0];
const $name = d.getElementsByName("name")[0];
const $lastname = d.getElementsByName("lastname")[0];
const $errorMessageCredit = $creditInput.parentElement.nextElementSibling, $errorMessageDate = $dateExpiry.parentElement.nextElementSibling, $errorMessageCvv = $cvv.parentElement.nextElementSibling, $errorMessageName = $name.parentElement.nextElementSibling,
    $errorMessageLastName = $lastname.parentElement.nextElementSibling;


d.addEventListener("click", e => {
    e.preventDefault();

    if (e.target === $buttonTranslate) {
        translateGoogleController.googleTranslateElementInit(e.target.id, script);
    }

    if (e.target.matches("#btn-open-modal-cvv")) {
        d.querySelector(".container-cvv-question").classList.remove("d-none");
    }

    if (e.target.matches("#close-cvv-modal")) {
        d.querySelector(".container-cvv-question").classList.add("d-none");
    }

    if (e.target.matches("#start-membership")) {
        if (form.validEmptyInput($creditInput.value) || !form.validCreditTarget($creditInput.value)) {
            $creditInput.focus();
            form.invalidDataStyleBorder($creditInput.parentElement);
            $errorMessageCredit.classList.remove("d-none");
        }
        else if (form.validEmptyInput($dateExpiry.value) || !form.validDateFormatMMAA($dateExpiry.value)) {
            $dateExpiry.focus();
            form.invalidDataStyleBorder($dateExpiry.parentElement);
            $errorMessageDate.classList.remove("d-none");
        } else if (!(/^[A-Za-z0-9]{3,4}$/g.test($cvv.value))) {
            $cvv.focus();
            form.invalidDataStyleBorder($cvv.parentElement);
            $errorMessageCvv.classList.remove("d-none");
        } else if (form.validEmptyInput($name.value) || !form.onlyLetters($name.value)) {
            $name.focus();
            form.invalidDataStyleBorder($name.parentElement);
            $errorMessageName.classList.remove("d-none");
        } else {
            window.location.href = "home";
        }
    }
});


d.addEventListener("focusout", e => {
    if (e.target === $creditInput) {
        validateControlInput(form.validCreditTarget($creditInput.value),$creditInput,$errorMessageCredit);
    }

    if (e.target === $dateExpiry) {
        $dateExpiry.placeholder= "";
        validateControlInput(form.validDateFormatMMAA($dateExpiry.value),$dateExpiry,$errorMessageDate);
    }

    if (e.target === $cvv) {
        validateControlInput(/^[A-Za-z0-9]{3,4}$/g.test($cvv.value),$cvv,$errorMessageCvv);
    }

    if (e.target === $name) {
        validateControlInput(form.onlyLetters($name.value),$name,$errorMessageName);
    }

    if (e.target === $lastname) {
        if (e.target.value.length > 0) {
            validateControlInput(form.onlyLetters($lastname.value),$lastname,$errorMessageLastName);
        } else {
            $errorMessageLastName.classList.add("d-none");
            form.validDataStyleBorder($lastname.parentElement);
        }
    }
});


$dateExpiry.addEventListener("focusin", e => {
    e.target.placeholder = "MM/AA";
});


d.addEventListener("keyup", e => {
    if (e.target === $creditInput) {
        validateControlInput(form.validCreditTarget($creditInput.value),$creditInput,$errorMessageCredit);
    }

    if (e.target === $dateExpiry) {
        let arrayDateValue = $dateExpiry.value.split('');

        if (e.key > 1 && $dateExpiry.value.length < 2) {
            $dateExpiry.value = `0${e.key}/`;
        }
        if ($dateExpiry.value.length === 2 && e.key !== "Backspace") {
            if (Number.parseInt($dateExpiry.value) > 12) {
                $dateExpiry.value = `01/${arrayDateValue[1]}`;
            } else {
                $dateExpiry.value += "/";
            }
        }

        if ($dateExpiry.value.length === 5) {
            let currentDate = new Date();
            let yearUserInput = arrayDateValue.splice(3, 4).join('');

            if (yearUserInput < currentDate.getFullYear().toString().split('').splice(2, 3).join('') || yearUserInput > 49) {
                $errorMessageDate.textContent = `Ingresar año entre ${currentDate.getFullYear()} y 2049`;
                $errorMessageDate.classList.remove("d-none");
            }

        }

        if (isNaN(e.key) && e.key !== "Backspace") {
            arrayDateValue.pop();
            $dateExpiry.value = arrayDateValue.join('');
        }

        validateControlInput(form.validDateFormatMMAA($dateExpiry.value),$dateExpiry,$errorMessageDate);

    }

    if (e.target === $cvv) {
        validateControlInput(/^[A-Za-z0-9]{3,4}$/g.test($cvv.value),$cvv,$errorMessageCvv);
    }

    if (e.target === $name) {
        validateControlInput(form.onlyLetters($name.value),$name,$errorMessageName);
    }

    if (e.target === $lastname) {
        if (e.target.value.length > 0) {
            validateControlInput(form.onlyLetters($lastname.value),$lastname,$errorMessageLastName);
        } else {
            $errorMessageLastName.classList.add("d-none");
            form.validDataStyleBorder($lastname.parentElement);
        }
    }
});


d.addEventListener("DOMContentLoaded", e => {
    let infoPlan = JSON.parse(localStorage.getItem("infoPlanSelected"));
    $buttonTranslate.click();
    if ($buttonTranslate.classList.contains("light-style")) {
        setTimeout(() => {
            d.querySelector(".VIpgJd-ZVi9od-xl07Ob-lTBxed > span:first-of-type").classList.add("text-dark");
        }, 3000);
    }

    d.querySelector("#price-plan").textContent = infoPlan.price;
    d.querySelector("#description-plan").textContent = infoPlan.description;
});


function validateControlInput(validation,input,message){
    if(!validation){
        input.focus();
        message.classList.remove("d-none");
        form.invalidDataStyleBorder(input.parentElement);
    }else{
        message.classList.add("d-none");
        form.validDataStyleBorder(input.parentElement);
    }
}
