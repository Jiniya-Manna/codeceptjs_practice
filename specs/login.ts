Feature('login');
Scenario('PretaaLogin_test', ({ I }) => {
    I.amOnPage('/login');
    I.see('Continue');
    I.fillField('[data-testid="email"]' , 'jiniya+1+admin@itobuz.com');
    I.click('[data-testid="continue-btn"]');
    I.fillField('[data-testid="password"]' , 'Password@50');
    I.see('Show Password');
    I.wait(1);
    I.click('[type="button"]');
    I.click('[data-testid="submit-btn"]');
    I.wait(2);
    I.click('[href="/logout"]');
    I.wait(2);
});

