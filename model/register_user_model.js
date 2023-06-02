export default class RegisterUserModel{
    saveData(data){
        localStorage.setItem("data-user",data);
    }
}