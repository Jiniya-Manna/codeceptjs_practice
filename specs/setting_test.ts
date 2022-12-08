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
    I.see('No Rows To Show');
    I.click('[href="/logout"]');
    I.wait(2);
});
Scenario('go to group search',async ({ I }) => { 
    I.click('[href="/settings/admin/user-list"]');
    I.wait(20);
    let groupList = await I.grabTextFromAll('[data-testid="search-input"]');
    console.log(groupList);
    let random = Math.floor(Math.random() * groupList.length);
    console.log(random)
    let x=groupList[random]
    I.fillField('[data-testid="search-input"]' ,x);
    //I.see('No Rows To Show');
    I.click('[href="/logout"]');
    I.wait(2);

});
