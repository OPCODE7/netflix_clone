export default class SuscriptionPlanModel{
    savePlanData(data){
        localStorage.setItem("suscription-info",data);
    }

    getPlanData(){
        return localStorage.getItem("suscription-info");
    }
}