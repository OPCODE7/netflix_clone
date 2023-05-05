const d = document;

const $validMessage= d.querySelector(".valid-message-input");

d.addEventListener("focusin", e => {
    if(e.target.matches(".input-form")){
        e.target.classList.add("focus-input");
    }
});

d.addEventListener("focusout", e => {
    if(e.target.matches(".input-form")){
        if (e.target.value.length === 0) {
            e.target.classList.remove("focus-input");
            $validMessage.classList.remove("d-none");
        }
    }
});