//import { locator } from "codeceptjs";

const { I } = inject();
export = {

    locator : {
        submitBtn: '[data-testid="submit-btn"]',
        password: '[data-testid="password"]',
        UserName: '[data-testid="email"]',
        showPassword: '[type="button"]',
        continueBtn: '[data-testid="continue-btn"]'
    },

login() {

    I.amOnPage('/login');
    I.see('Continue');
    I.fillField(this.locator.UserName , 'jiniya+1+admin@itobuz.com');
    I.click(this.locator.continueBtn);
    I.fillField(this.locator.password , 'Password@50');
    I.see('Show Password');
    I.wait(1);
    I.click(this.locator.showPassword);
    I.click(this.locator.submitBtn);
    I.wait(3);
}
}