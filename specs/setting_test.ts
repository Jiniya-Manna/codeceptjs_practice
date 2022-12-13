import loginPage = require("../pages/login");
Feature('setting_test');
var faker = require ('faker')
Scenario('go to setting', async ({ I }) => {
    loginPage.login()
    I.click('[href="/settings/preferences/profile"]');
    I.wait(1);
});
Scenario('go to admin', async ({ I }) => {
    I.click('.pl-4 div:nth-child(4) h3');
});
Scenario.skip('go to users', async ({ I }) => {
    I.click('[href="/settings/admin/user-list"]');
    I.wait(20);
    let  words = faker.random.words();
    console.log("output",words);
    I.fillField('[data-testid="search-input"]' ,words);
    I.click('[href="/logout"]');
    I.wait(2);
});
Scenario('go to group search',async ({ I }) => { 
    //I.limitTime(5).click('[href="/settings/admin/user-list"]')
    I.click('[href="/settings/admin/user-list"]');
    I.wait(20);
    let usersList = await I.grabTextFromAll('[data-testid="search-input"]');
    console.log(usersList);
    let random = Math.floor(Math.random() * usersList.length);
    console.log(random)
    let x=usersList[random]
    I.fillField('[data-testid="search-input"]' , x);
    I.limitTime(2).click('[id="ag-31-input"]');
    I.limitTime(2).click('[data-testid="create-group-btn"]');
    I.fillField('[data-test-id="group-name-input"]' , 'testing');
    I.limitTime(1).click('.h3 button');
    I.see('Select a list');
    I.limitTime(2).click('//*[@id="root"]/div[2]/div[2]/div[1]/div/div[1]/div/input');
    I.wait(4);
    I.click('[type="submit"]:nth-child(1)');
    I.wait(3)
    I.see('New User Group');
    I.click('[data-test-id="data-object-selection-btn"]');
    I.see('Data Object Access');
    I.wait(4);
    I.click('[value="d0fb2589-1c0d-480e-8b2a-600e40d05685"]');
    I.wait(4);
    I.wait(1);
    I.click('[type="submit"]:nth-child(1)');
    I.wait(3);
    I.see('New User Group');
    I.click('[data-test-id="usecase-selection-btn"]');
    I.see('Use Case Management');
    I.click('[data-test-id="useCase_item"] input');
    I.limitTime(1).click('[type="submit"]:nth-child(1)');
    I.wait(3);
    I.click('[href="/logout"]');
    I.wait(2);
});
