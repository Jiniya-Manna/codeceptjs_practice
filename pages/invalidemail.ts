const { I } = inject();

export = {
   invalidEmail() {
    I.amOnPage('/login');
    I.fillField('[data-testid="email"]' , '123@itobuz.com');
    I.click('[data-testid="continue-btn"]');
    I.seeElement('[data-testid="error-id"]');
    I.wait(2);
    I.clearField('[data-testid="email"]');
    
  }
  };
