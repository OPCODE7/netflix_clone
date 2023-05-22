export default class TranslateGoogleModel {
    constructor() {
        this.pageLanguage = "es";
        this.includedLanguages = ["ca", "eu", "gl", "en", "fr", "it", "pt", "de", "es"];
    }

    googleTranslateElementInit(googleTranslateDomElement) {
        new google.translate.TranslateElement(
            {
                pageLanguage: this.pageLanguage, includedLanguages: this.includedLanguages.join(','), layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true
            },
            googleTranslateDomElement);
    }

    
}