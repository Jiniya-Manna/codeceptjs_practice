Feature('ClickOnFloatingButton_test');

Scenario('ClickOnFloatingButton_test', async ({ I }) => {
    I.amOnPage('https://pretaa-staging.netlify.app/login');
    I.seeElement('[data-testid="continue-btn"]');
    I.fillField('[data-testid="email"]' , 'jiniya+1+admin@itobuz.com');
    I.click('[data-testid="continue-btn"]');
    I.fillField('[data-testid="password"]' , 'Password@50');
    I.seeElement('[data-testid="submit-btn"]');
    I.waitForElement('[data-testid="submit-btn"]',1);
    I.click('[type="button"]');
    I.click('[data-testid="submit-btn"]');
    I.seeElement('[data-test-id="page-title"]');
    I.waitForElement('[data-test-id="page-title"]' ,1);
    I.click('[href="/companies/list"]');
    const users = await I.grabTextFrom('[href="/companies/9701ef1c-52b6-4ca7-90f1-9effebce13ec"]');
    console.log(users);
    I.click('[data-test-id="company-list-link"]');
    I.waitForElement('[clip-rule="evenodd"]:nth-child(1)' ,1);
    I.click('[clip-rule="evenodd"]:nth-child(1)');
    I.seeElement('[class="flex items-center outline-none"]');
});