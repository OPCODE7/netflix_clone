import MembershipModel from "../model/membership_model.js";

export default class MembershipController {
    constructor() {
        this.memberShipModel = new MembershipModel();
    }

    saveMembership(data) {
        let memberships = JSON.parse(this.memberShipModel.getAllMembership());
        let arrayMembership = [data];
    
        if (memberships !== null) {
            this.memberShipModel.saveMembership(JSON.stringify([...memberships,...arrayMembership]));
        } else {
            this.memberShipModel.saveMembership(JSON.stringify(arrayMembership));
        }

    }

    getMembership() {
        return this.memberShipModel.getAllMembership();
    }
} 