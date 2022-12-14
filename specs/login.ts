import { after, before } from "node:test";

Feature('login');
//Before(() => {
Scenario('PretaaLogin_test', ({ I }) => {
    
    I.amOnPage('https://pretaa-staging.netlify.app/login');
    I.see('Continue');
    before(() => {
    I.fillField('[data-testid="email"]' , 'jiniya+1+admin@itobuz.com');
    I.click('[data-testid="continue-btn"]');
    I.fillField('[data-testid="password"]' , 'Password@50');
    I.see('Show Password');
    I.wait(1);
    I.click('[type="button"]');
    I.click('[data-testid="submit-btn"]');
    after(() => {
    });
});  
});

