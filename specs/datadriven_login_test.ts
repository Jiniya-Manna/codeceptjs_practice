import datadrivenPage from "../pages/datadriven";
import  login from "../pages/login";
Feature('multiplelogin');
let accounts = new DataTable(['login', 'password']);
accounts.add(['jiniya+1@itobuz.com', 'Password@50']); 
accounts.add(['jiniya+1+admin@itobuz.com', 'Password@50']);
Data(accounts).Scenario('PretaaLogin_test', ({I,current}) => {
    //datadrivenPage.datadrivenA();
    I.amOnPage('/login')
    I.fillField(login.locator.UserName ,current.login);
    I.click(login.locator.continueBtn);
    I.wait(1);
    I.fillField(login.locator.password ,current.password);
    I.click(login.locator.submitBtn);
    I.wait(3);
    I.see('Events');
    I.click(login.locator.logout);
});