const { I , current } = inject();
export = {
  async datadriven() {
      I.amOnPage('/login');
      I.fillField('[data-testid="email"]' ,current.login);
      I.click('[data-testid="continue-btn"]');
      I.wait(1);
      I.fillField('[data-testid="password"]' ,current.password);
      I.click('[data-testid="submit-btn"]');
      I.wait(3);
      I.see('Events');
      I.click('[data-test-id="logout"]');
  
} };