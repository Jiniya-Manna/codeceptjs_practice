
const { I } = inject();
module.exports = {
   locatot:{
    continueButton:'Continue',
    email:'[data-testid="email"]',
    password:'[data-testid="password"]',
    button:'[data-testid="continue-btn"]',
    signIn: '[data-testid="submit-btn"]',
    showPassword:'Show Password',
    button1:'[type="button"]',
    event:'Events'

   },
   login() {  
    I.amOnPage('/')
    I.see(this.locatot.continueButton);
    I.fillField(this.locatot.email , 'admin@itobuz.com');
    I.click(this.locatot.button);
    I.fillField(this.locatot.password, 'password');
    I.wait(1);
    I.see(this.locatot.showPassword);
    I.wait(1);
    I.click(this.locatot.button1);
    I.click(this.locatot.signIn);
    I.see(this.locatot.event);
    I.wait(2);
}
}
