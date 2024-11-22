import { By, Locator } from "selenium-webdriver";

export class FormElements {
    FIRST_NAME: Locator
    LAST_NAME: Locator
    GENDER_MALE: Locator
    MOBILE: Locator
    SUBMIT_BTN: Locator
    SUCCESS_MODAL: Locator
    TXT_FIRST_NAME: string
    TXT_LAST_NAME: string
    TXT_MOBILE: string
    


    constructor() {
        this.FIRST_NAME = By.id('firstName')
        this.LAST_NAME = By.id('lastName')
        this.GENDER_MALE = By.css("label[for='gender-radio-1']")
        this.MOBILE = By.id('userNumber')
        this.SUBMIT_BTN = By.id('submit')
        this.SUCCESS_MODAL = By.id('example-modal-sizes-title-lg')
        this.TXT_FIRST_NAME = "Selenium"
        this.TXT_LAST_NAME = "TS Web"
        this.TXT_MOBILE = "1234567890"
    }
}
