import { Key, WebDriver, until } from "selenium-webdriver";
import { FormElements } from "../elements/formElements";
import { SetupPage } from "../setup/browserSetup";

export class UtilsForm extends SetupPage{
    formElem: FormElements;
    driver: WebDriver

    constructor(driver: WebDriver) {
        super();
        this.driver = driver
        this.formElem = new FormElements();
    }

    async fillFirstName(){
        const firstNameField = await this.driver.wait(until.elementLocated(this.formElem.FIRST_NAME), 15000);
        await firstNameField.sendKeys(this.formElem.TXT_FIRST_NAME);
    }

    async fillLastName(){
        const lastNameField = await this.driver.findElement(this.formElem.LAST_NAME);
        await lastNameField.sendKeys(this.formElem.TXT_LAST_NAME);
        await lastNameField.sendKeys(Key.TAB, Key.TAB);
    }

    async clickRadioMale(){
        const maleCheckbox = await this.driver.wait(until.elementLocated(this.formElem.GENDER_MALE), 15000);
        await this.driver.executeScript("arguments[0].click();", maleCheckbox);
    }

    async fillMobile(){
        await this.driver.findElement(this.formElem.MOBILE).sendKeys(this.formElem.TXT_MOBILE);
    }

   async submitForm(): Promise<void> {
        try {
            const submitButton = await this.driver.wait(until.elementLocated(this.formElem.SUBMIT_BTN), 10000);
            await this.driver.executeScript("arguments[0].click();", submitButton);
        } catch (error) {
            console.error("Error when click on 'Submit':", error);
            throw error;
        }
    }

    async fillRequiredFields(){
        await this.fillFirstName()
        await this.fillLastName()
        await this.clickRadioMale()
        await this.fillMobile()
    }

    async validateSubmitSuccessfully(): Promise<boolean> {
                const modal = await this.driver.wait(until.elementLocated(this.formElem.SUCCESS_MODAL), 10000);
                return modal.isDisplayed();
            }
}

