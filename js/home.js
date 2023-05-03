const d= document;

d.addEventListener("click", e=> {
    if(e.target.matches(".accordion-button")){
        e.target.querySelector(".fa-plus").classList.toggle("rotate-acordion-icon")
    }
});