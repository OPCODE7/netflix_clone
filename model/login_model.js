export default class LoginModel{
    saveSession(email){
        localStorage.setItem("user",email);
    }

    getSession(){
        let getSession= localStorage.getItem("user");
        return getSession;
    }

}