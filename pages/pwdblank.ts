const { I } = inject();

export = {

pwdblank() {

  I.fillField('[data-testid="email"]' , 'admin@itobuz.com');
  I.click('[data-testid="continue-btn"]');
  I.wait(2);
  I.click('[data-testid="submit-btn"]');
  I.seeElement('[data-testid="error-id"]')
  I.wait(2)
  I.clearField('[data-testid="email"]')

  
}
};
