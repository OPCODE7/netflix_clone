const d= document;
const $buttonTranslate = d.querySelector("#google_translate_element");

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'es', includedLanguages: 'ca,eu,gl,en,fr,it,pt,de,es', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true }, 'google_translate_element');
}

$buttonTranslate.addEventListener("click", e => {
    e.preventDefault();
    googleTranslateElementInit();
});

d.addEventListener("DOMContentLoaded", e => {
    if($buttonTranslate.classList.contains("light-style")){
        setTimeout(() => {
            
            d.querySelector(".VIpgJd-ZVi9od-xl07Ob-lTBxed > span:first-of-type").classList.add("text-dark");
        }, 3000);
    }
});
