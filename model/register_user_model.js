export default class RegisterUserModel{
    saveDataUser(data){
        localStorage.setItem("data-user",data);
    }

    saveSession(data){
        localStorage.setItem("current_session",data);
    }

    getSession(){
        let getSession= localStorage.getItem("current_session");
        return getSession;
    }

    getDataUser(){
        let getDataUser= localStorage.getItem("data-user");
        return getDataUser;
    }


    closeSession(){
        localStorage.removeItem("current_session");
    }
}