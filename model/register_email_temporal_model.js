export default class RegisterEmailModel{
    saveFlagExistEmail(data){
        localStorage.setItem("exist-email",data);
    }

    getEmailStorage(){
        return localStorage.getItem("exist-email");
    }

}