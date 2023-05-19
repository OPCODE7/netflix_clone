export function validEmail(inputValue) {
    const regExp = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return regExp.test(inputValue) ? true : false;
}


const d = document;

function changeToNoValidBorder(target) {
    target.classList.add("border-1");
    target.classList.add("border-danger");
    target.classList.add("rounded");
}

function validPassword(inputValue) {
    return inputValue.length >= 4 && inputValue.length <= 60 ? true : false;
}

function changeToValidBorder(target) {
    target.classList.remove("border-1");
    target.classList.remove("border-danger");
    target.classList.add("border-1");
    target.classList.add("border-success");
}

d.addEventListener("focusin", e => {
    if (e.target.matches(".input-form")) {
        e.target.classList.add("focus-input");
    }
});

d.addEventListener("focusout", e => {
    if (e.target.matches(".input-form")) {
        const $validMessage = e.target.parentElement.nextElementSibling;

        if (e.target.value.length === 0 || !validEmail(e.target.value)) {
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
            !validEmail(e.target.value) ? changeToNoValidBorder(e.target) : changeToValidBorder(e.target);

        }

        if (type === "password") {
            !validPassword(e.target.value) ? changeToNoValidBorder(e.target) : changeToValidBorder(e.target);
        }
    }
});

d.addEventListener("click", e => {
    if (e.target.matches("#login-btn")) {
        let email = d.querySelector("input[type='email']").value;
        let pwd = d.querySelector("input[type='password']").value;
        if (validEmail(email) && validPassword(pwd)) {
            window.location.href = "#";
        }
    }

    if (e.target.matches(".btn-plan-shop")) {
        const $optionsBasicPlan = d.querySelectorAll("#option-basic");
        const $optionsStandardPlan = d.querySelectorAll("#option-standard");
        const $optionsPremiumPlan = d.querySelectorAll("#option-premium");

        const $btnBasicPlan= d.querySelector("#btn-basic-plan");
        const $btnStandardPlan= d.querySelector("#btn-standard-plan");
        const $btnPremiumPlan= d.querySelector("#btn-premium-plan");
        

        if (e.target.id === "btn-basic-plan") {
            $btnBasicPlan.classList.add("plan-selected");

            if($btnStandardPlan.classList.contains("plan-selected")) $btnStandardPlan.classList.remove("plan-selected");
            if($btnPremiumPlan.classList.contains("plan-selected")) $btnPremiumPlan.classList.remove("plan-selected");
            
            $optionsBasicPlan.forEach(option => option.classList.add("text-danger"));
            $optionsStandardPlan.forEach(option => {
                if (option.classList.contains("text-danger")) {
                    option.classList.remove("text-danger");
                    option.classList.add("text-secondary");
                }
            });
            $optionsPremiumPlan.forEach(option => {
                if (option.classList.contains("text-danger")) {
                    option.classList.remove("text-danger");
                    option.classList.add("text-secondary");

                }
            });
        } else if (e.target.id === "btn-standard-plan") {
            $btnStandardPlan.classList.add("plan-selected");

            if($btnBasicPlan.classList.contains("plan-selected")) $btnBasicPlan.classList.remove("plan-selected");
            if($btnPremiumPlan.classList.contains("plan-selected")) $btnPremiumPlan.classList.remove("plan-selected");

            $optionsStandardPlan.forEach(option => option.classList.add("text-danger"));

            $optionsBasicPlan.forEach(option => {
                if (option.classList.contains("text-danger")) {
                    option.classList.remove("text-danger");
                    option.classList.add("text-secondary");
                }
            });
            $optionsPremiumPlan.forEach(option => {
                if (option.classList.contains("text-danger")) {
                    option.classList.remove("text-danger");
                    option.classList.add("text-secondary");

                }
            });
        } else if (e.target.id === "btn-premium-plan") {
            $btnPremiumPlan.classList.add("plan-selected");

            if($btnBasicPlan.classList.contains("plan-selected")) $btnBasicPlan.classList.remove("plan-selected");
            if($btnStandardPlan.classList.contains("plan-selected")) $btnStandardPlan.classList.remove("plan-selected");
            $optionsPremiumPlan.forEach(option => option.classList.add("text-danger"));
            $optionsStandardPlan.forEach(option => {
                if (option.classList.contains("text-danger")) {
                    option.classList.remove("text-danger");
                    option.classList.add("text-secondary");
                }
            });
            $optionsStandardPlan.forEach(option => {
                if (option.classList.contains("text-danger")) {
                    option.classList.remove("text-danger");
                    option.classList.add("text-secondary");

                }
            });
        }
    }

    if(e.target.matches("#btn-open-modal-cvv")){
        e.preventDefault();
        d.querySelector(".container-cvv-question").classList.remove("d-none");
    }
    
    if(e.target.matches("#close-cvv-modal")){
        e.preventDefault();
        d.querySelector(".container-cvv-question").classList.add("d-none");
    }
});



