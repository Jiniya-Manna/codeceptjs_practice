import loginPage from "../pages/login"
import  uploadtest from "../pages/testuploadfile";
Feature('login');
Scenario('PretaaLogin_test', async ({ I}) => {
    loginPage.login();
    uploadtest.uploadtest()
});
