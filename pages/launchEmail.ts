import invalid from "./invalid";
import noteCreated from "./noteCreated";

const { I } = inject();

export = {
  locator:{
    launchLink:'[data-testid="launch"] [class="flex items-center"]',
    launchPage:'[data-test-id="page-title"]',
    dropDown:'[alt="filled-icon"]',
    dropDownList:"//div[@id='react-select-2-option-2']/div/label",
    enterBtn:"Enter",
    createNewMessage:'[type="submit"]',
    emailTo:'[data-test-id="email-input"]',
    previewBtn:'[data-testid="preview-btn"]',
    launchBtn:'[data-testid="launch-btn"]'

  },
  async launchEmailA() {
   
   I.click(invalid.locator.companyListlink);
   I.wait(3)
   let companyList = await I.grabTextFromAll(noteCreated.locator.companylist);
   console.log(companyList);
   let random = Math.floor(Math.random() * companyList.length);
   let companyRandomValue=companyList[random]
   I.fillField(invalid.locator.searchBar, companyRandomValue);
   I.wait(2);
   I.click(companyRandomValue);
   I.see('Details');
   I.wait(2)
   I.click(noteCreated.locator.floatBtn);
   I.wait(5);
   I.click(this.locator.launchLink);
   I.seeElement(this.locator.launchPage);
   I.wait(2);
   I.click(this.locator.dropDown);
   I.click(this.locator.dropDownList);
   I.pressKey("Enter");
   I.wait(2);
   I.click(this.locator.createNewMessage);
   I.see('Launch');
   I.fillField(this.locator.emailTo,'salma@itobuz.com');
   I.click(this.locator.previewBtn)
   I.click(this.locator.launchBtn);
   I.wait(2);
   I.see('Launch Detail'); 
   I.wait(2);   
  
}};
