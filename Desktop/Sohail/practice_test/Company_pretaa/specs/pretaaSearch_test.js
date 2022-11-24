const { companysearch } = require("../pages/companysearch");

Feature('search');

Scenario('go to pretaa login', async ({ I , loginPage}) => {
    I.amOnPage('/');
    loginPage.login()
});

Scenario('go to company list', async ({ I , loginPage,companysearchPage}) => {
    I.amOnPage('/');
    loginPage.login()
    companysearchPage.companysearch()
});


  