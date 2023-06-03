export default class SuscriptionPlanModel{
    savePlanData(data){
        localStorage.setItem("suscription-info",data);
    }
}