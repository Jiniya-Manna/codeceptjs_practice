//import { datadriven } from "../pages/datadriven";
import datadrivenPage from "../pages/datadriven";
Feature('login');
let accounts = new DataTable(['login', 'password']);
accounts.add(['jiniya+1@itobuz.com', 'Password@50']); 
accounts.add(['jiniya+1+admin@itobuz.com', 'Password@50']);

Data(accounts).Scenario('PretaaLogin_test', ({I , current}) => {
   //datadrivenPage.datadriven();
    I.amOnPage('/login');
    I.fillField('[data-testid="email"]' ,current.login);
    I.click('[data-testid="continue-btn"]');
    I.wait(1);
    I.fillField('[data-testid="password"]' ,current.password);
    I.click('[data-testid="submit-btn"]');
    I.wait(3);
    I.see('Events');
    I.click('[data-test-id="logout"]');
});