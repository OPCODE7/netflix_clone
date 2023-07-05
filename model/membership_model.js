export default class MembershipModel{
    saveMembership(data){
        localStorage.setItem("memberships",data);
    }

    getAllMembership(){
        return localStorage.getItem("memberships");
    }

} 