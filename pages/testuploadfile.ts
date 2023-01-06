import settingpage from "./settingpage";

const { I } = inject();

export = {
  locator: {
    manageusers:'[type="submit"]:nth-child(1)',
    uploadCSV:'[data-test-id="options"]',
    userMngTitle:'[data-test-id="page-title"]',
    browserupload:'[data-testid="content-frame"] div:nth-child(3) div:nth-child(1) label',
    checkBox:'[type="checkbox"]',
    saveBtn:'[type="submit"]'
  },

    uploadtest() {
    I.click(settingpage.locator.settingLink);
    I.click(settingpage.locator.user);
    I.wait(2);
    I.click(settingpage.locator.adminlink);
    I.wait(2);
    I.click(this.locator.manageusers);
    I.click(this.locator.uploadCSV);
    I.seeElement(this.locator.userMngTitle);
    I.attachFile(this.locator.browserupload,'user_coustomer.xlsx');
    I.wait(5);
    I.click(this.locator.checkBox);
    I.click(this.locator.saveBtn);
    I.wait(10);
}
}