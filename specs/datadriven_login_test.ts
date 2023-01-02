import datadriven from "../pages/datadriven";
import  login from "../pages/login";
Feature('login');
let accounts = new DataTable(['login', 'password']);
accounts.add(['jiniya+1@itobuz.com', 'Password@50']); 
accounts.add(['jiniya+1+admin@itobuz.com', 'Password@50']);
Before(({I}) => {
    I.amOnPage('/login')
    })
Data(accounts).Scenario('PretaaLogin_test', ({I , current}) => {
    datadriven.datadriven();
});
After(({I}) => { 
    I.click(login.locator.logout);
});