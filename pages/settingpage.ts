import invalid from "./invalid";

const { I } = inject();
export = {
  locator:{
    settingLink: '[href="/settings/preferences/profile"]',
    searhBarLink:'[data-testid="search-input"]',
    adminlink:'[href="/settings/admin/user-list"]',
    user:'.pl-4 div:nth-child(4) h3',
    userList:'[data-test-id="name-col"]',
    checkBox:'[id="ag-31-input"]',
    groupBtn:'[data-testid="create-group-btn"]',
    grpInputFiled:'[data-test-id="group-name-input"]',
    btn:'.h3 button',
    doaSelector:'//*[@id="root"]/div[2]/div[2]/div[1]/div/div[1]/div/input',
    saveBtn:'[type="submit"]:nth-child(1)',
    dataObjectSection:'[data-test-id="data-object-selection-btn"]',
    value:'[value="d0fb2589-1c0d-480e-8b2a-600e40d05685"]',
    useCaseSelector:'[data-test-id="usecase-selection-btn"]',
    useCaseItem:'[data-test-id="useCase_item"] input',
  },
  async settingpage ()  {
    I.click(this.locator.settingLink);
    I.click(this.locator.user);
    I.click(this.locator.adminlink);
    I.wait(20);
    let usersList = await I.grabTextFromAll(this.locator.userList);
    console.log(usersList);
    let random = Math.floor(Math.random() * usersList.length);
    let grpListValue=usersList[random]
    I.fillField(this.locator.searhBarLink , grpListValue);
    I.wait(2);
    I.click(this.locator.checkBox);
    I.limitTime(2).click(this.locator.groupBtn);
    I.fillField(this.locator.grpInputFiled, 'testing');
    I.limitTime(1).click(this.locator.btn);
    I.see('Select a list');
    I.limitTime(2).click(this.locator.doaSelector);
    I.wait(4);
    I.click(this.locator.saveBtn);
    I.wait(3)
    I.see('New User Group');
    I.click(this.locator.dataObjectSection);
    I.see('Data Object Access');
    I.wait(4);
    I.click(this.locator.value);
    I.wait(4);
    I.wait(1);
    I.click(this.locator.saveBtn);
    I.wait(3);
    I.see('New User Group');
    I.click(this.locator.useCaseSelector);
    I.see('Use Case Management');
    I.click(this.locator.useCaseItem);
    I.limitTime(1).click(this.locator.saveBtn);
    I.wait(3);
    I.click(invalid.locator.logOut);
    I.wait(2);
}
}
