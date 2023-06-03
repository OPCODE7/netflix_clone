export default class LoginModel{
    getLoginData(data){
        return localStorage.getItem(data);
    }
}