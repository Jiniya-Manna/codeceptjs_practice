Feature('search');

Scenario('test something', ({ I , loginPage ,searchPage}) => {

    I.amOnPage('/');
    loginPage.login()
    searchPage.search()
});
