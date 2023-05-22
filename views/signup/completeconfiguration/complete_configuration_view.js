import TranslateGoogleController from "../../../controller/translate_google_feature_controller.js";

const d= document;

let translateGoogleController= new TranslateGoogleController();
const $buttonTranslate = d.querySelector("#google_translate_element");
let google_script_url = "//translate.google.com/translate_a/element.js";
let script= d.querySelector("script[src*='"+google_script_url+"']");


$buttonTranslate.addEventListener("click", e => {
    e.preventDefault();
    translateGoogleController.googleTranslateElementInit(e.target.id,script);
});

d.addEventListener("DOMContentLoaded", e => {
    $buttonTranslate.click();
    if($buttonTranslate.classList.contains("light-style")){
        setTimeout(() => {
            d.querySelector(".VIpgJd-ZVi9od-xl07Ob-lTBxed > span:first-of-type").classList.add("text-dark");
        }, 3000);
    }
});