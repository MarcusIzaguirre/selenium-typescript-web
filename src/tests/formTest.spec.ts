import { expect } from "chai";
import { WebDriver } from "selenium-webdriver";
import { SetupPage } from "../../setup/browserSetup"; 
import { UtilsForm } from "../../pages/utilsForm"; 

describe("Automation Practice Form", function () {
  this.timeout(30000);
  let driver: WebDriver;
  let utilsForm: UtilsForm;
  let setupPage: SetupPage;
  

  beforeEach(async function () {
    driver = await SetupPage.setupDemoQA()
    utilsForm = new UtilsForm(driver);
    console.log("Navigating to the URL...");
      });

  afterEach(async function () {
    console.log("Closing the browser...");
    await SetupPage.closeBrowser()
  });

  it("Scenario 01 - It should submit the form successfully", async function () {
    console.log("Filling the form...");
    await utilsForm.fillRequiredFields();
    console.log("Submitting the form...");
    await utilsForm.submitForm();
    await utilsForm.validateSubmitSuccessfully()
 
  });
});
