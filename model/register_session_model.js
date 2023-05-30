export default class RegisterModel{
    saveSession(email){
        localStorage.setItem("user",email);
    }

    getSession(){
        let getSession= localStorage.getItem("user");
        return getSession;
    }

}