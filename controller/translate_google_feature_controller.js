import TranslateGoogleModel from "../model/translate_google_feature_model.js";

export default class TranslateGoogleController {
    constructor() {
        this.TranslateGoogleModel = new TranslateGoogleModel();
    }

    googleTranslateElementInit(googleTranslateDomElement,googleScriptUrl) {
        let timer = setInterval(() => {
            if (googleScriptUrl!==undefined) {
                this.TranslateGoogleModel.googleTranslateElementInit(googleTranslateDomElement);
                clearInterval(timer);
            }
        }, 3000);

    }


   
}