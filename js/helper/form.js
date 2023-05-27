export class Form{

    validEmail(inputValue) {
        const regExp = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return regExp.test(inputValue) ? true : false;
    }

    validPassword(inputValue) {
        return inputValue.length >= 4 && inputValue.length <= 60 ? true : false;
    }

    validCreditTarget(inputValue){
        const regExp= /^(?:\d{15,16}|\d{4}(?:(?:\s+\d{4}){3}|\s+\d{6}\s\d{5}))$/;

        return regExp.test(inputValue) ? true : false;
    }

    validEmptyInput(inputValue){
        return inputValue.length===0  ? true : false;
    }

    validDateFormatMMAA(inputValue){
        const regExp = new RegExp("(((0[123456789]|10|11|12)/(([2-4][3-9]))))");

        return regExp.test(inputValue) ? true : false;
    }

    onlyLetters(inputValue){
        const regExp= /^[a-z\s]+$/gi;
        return regExp.test(inputValue) ? true : false;
    }

    onlyNumbers(inputValue){
        const regExp= /^[0-9]+$/;
        return regExp.test(inputValue) ? true : false;
    }

    invalidDataStyleBorder(target) {
        target.classList.add("border-1");
        target.classList.add("border-danger");
        target.classList.add("rounded");
    }
    
    validDataStyleBorder(target) {
        target.classList.remove("border-danger");
        target.classList.add("border-1");
        target.classList.add("border-success");
    }
} 

const form= new Form();
const d= document;

d.addEventListener("focusin", e => {
    if (e.target.matches(".input-form")) {
        e.target.classList.add("focus-input");
    }
});

d.addEventListener("focusout", e => {
    if (e.target.matches(".input-form")) {
        const $validMessage = e.target.parentElement.nextElementSibling;

        if(e.target.type==="email"){
            if(!form.validEmail(e.target.value)){
                e.target.classList.remove("focus-input");
                $validMessage.classList.remove("d-none");
            }else {
                $validMessage.classList.add("d-none");
            }
        }

        if (e.target.value.length === 0) {
            e.target.classList.remove("focus-input");
            $validMessage.classList.remove("d-none");
        } else {
            $validMessage.classList.add("d-none");
        }
    }
});

d.addEventListener("keyup", e => {
    if (e.target.matches("input")) {
        let type = e.target.getAttribute("type");

        e.target.classList.remove("border-0");
        if (type === "email") {
            !form.validEmail(e.target.value) ? form.invalidDataStyleBorder(e.target) : form.validDataStyleBorder(e.target);
        }

        if (type === "password") {
            !form.validPassword(e.target.value) ? form.invalidDataStyleBorder(e.target) : form.validDataStyleBorder(e.target);
        }
    }
});


d.addEventListener("DOMContentLoaded", e => {
    const inputs= d.querySelectorAll("input");

    inputs.forEach(input => {
        if(input.value.length>0){
            input.classList.add("focus-input");
        }
    });
});