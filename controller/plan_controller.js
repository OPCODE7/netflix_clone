import SuscriptionPlanModel from "../model/plan_model.js";

export default class SuscriptionPlanController{

    constructor(){
        this.planModel= new SuscriptionPlanModel();
    }

    savePlanData(data){
        if(data!==undefined){
            this.planModel.savePlanData(JSON.stringify(data));
        }
    }

    getPlanData(){
        let infoPlan= this.planModel.getPlanData();
        return infoPlan;
    }
}