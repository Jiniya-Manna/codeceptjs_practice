const { I } = inject();

export = {

  async login() { 
    I.amOnPage('/login');

    I.fillField('[data-testid="email"]' , 'jiniya+1+admin@itobuz.com');
    I.click('[data-testid="continue-btn"]');
    I.fillField('[data-testid="password"]' , 'Password@50');
    I.see('Show Password');
    I.wait(1);
    I.click('[type="button"]');
    I.click('[data-testid="submit-btn"]');
    I.see('Events');
   
  
}
};