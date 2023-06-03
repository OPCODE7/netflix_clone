import SuscriptionPlanController from "../../../controller/plan_controller.js";
import RegisterController from "../../../controller/register_session_controller.js";

const d = document;
const registerController= new RegisterController();
const suscriptionPlanController= new SuscriptionPlanController();


const infoPlanSelected= {
    price:"USD10.99",
    description:"Premium"
};

d.addEventListener("click", e => {
    if (e.target.matches(".btn-session")) {
        registerController.closeSession();
    }

    
    if (e.target.matches(".btn-plan-shop")) {
        const $optionsBasicPlan = d.querySelectorAll("#option-basic");
        const $optionsStandardPlan = d.querySelectorAll("#option-standard");
        const $optionsPremiumPlan = d.querySelectorAll("#option-premium");

        const $btnBasicPlan = d.querySelector("#btn-basic-plan");
        const $btnStandardPlan = d.querySelector("#btn-standard-plan");
        const $btnPremiumPlan = d.querySelector("#btn-premium-plan");


        if (e.target.id === "btn-basic-plan") {
            infoPlanSelected.price= "USD4.99";
            infoPlanSelected.description= "Básico";
            $btnBasicPlan.classList.add("plan-selected");

            if ($btnStandardPlan.classList.contains("plan-selected")) $btnStandardPlan.classList.remove("plan-selected");
            if ($btnPremiumPlan.classList.contains("plan-selected")) $btnPremiumPlan.classList.remove("plan-selected");

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
            infoPlanSelected.price= "USD7.99";
            infoPlanSelected.description= "Estándar";
            $btnStandardPlan.classList.add("plan-selected");

            if ($btnBasicPlan.classList.contains("plan-selected")) $btnBasicPlan.classList.remove("plan-selected");
            if ($btnPremiumPlan.classList.contains("plan-selected")) $btnPremiumPlan.classList.remove("plan-selected");

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
            infoPlanSelected.price= "USD7.99";
            infoPlanSelected.description= "Estándar";
            $btnPremiumPlan.classList.add("plan-selected");

            if ($btnBasicPlan.classList.contains("plan-selected")) $btnBasicPlan.classList.remove("plan-selected");
            if ($btnStandardPlan.classList.contains("plan-selected")) $btnStandardPlan.classList.remove("plan-selected");
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

    if(e.target.matches("#go-payment-picker")){
        alert("hola")
        suscriptionPlanController.savePlanData(infoPlanSelected);
    }
});