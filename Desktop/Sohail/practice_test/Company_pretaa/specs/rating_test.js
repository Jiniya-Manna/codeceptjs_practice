 
Feature('search');

Scenario('test rating', ({ I }) => {
    I.amOnPage('https://pretaa-staging.netlify.app/login');
    I.see('Continue');
    I.fillField('[data-testid="email"]' , 'admin@itobuz.com');
    I.click('[data-testid="continue-btn"]');
    I.fillField('[data-testid="password"]' , 'password');
    //I.wait(1);
    I.see('Show Password');
    I.wait(1);
    I.click('[type="button"]');
    I.click('[data-testid="submit-btn"]');
    I.see('Events');
    I.wait(2);
    I.click('[data-testid="feedback-link"]');
    I.see('Feedback');
    I.wait(2);
    I.click('[data-test-id="star-rating"]');
    let x = Math.floor((Math.random() * 5) + 1);
    I.wait(2);
    I.fillField('[data-test-id="feedback-comment"]' , 'test comment');
    I.click('[data-testid="save-btn"]');
    I.wait(2);

});