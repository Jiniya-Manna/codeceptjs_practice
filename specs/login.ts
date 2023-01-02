import loginPage from "../pages/login";
Feature('login');
Scenario('PretaaLogin_test', ({ I }) => {
    loginPage.login();
});

 