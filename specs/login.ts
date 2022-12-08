Feature('login');
Scenario('PretaaLogin_test', ({ I }) => {
    I.amOnPage('https://pretaa-staging.netlify.app/login');
    I.see('Continue');
    I.fillField('[data-testid="email"]' , 'jiniya+1+admin@itobuz.com');
    I.click('[data-testid="continue-btn"]');
    I.fillField('[data-testid="password"]' , 'Password@50');
    //I.wait(1);
    I.see('Show Password');
    I.wait(1);
    I.click('[type="button"]');
    I.click('[data-testid="submit-btn"]');
    I.see('Events');
    I.click('[role="event-filter"]');
    I.click('[aria-hidden="true"]');
    I.see('MY COMPANIES');
    I.click('[value="MY_COMPANIES"]');
    I.click('[data-test-id="apply-button"]');
    I.see('LAUNCH');
    I.wait(2);
});

