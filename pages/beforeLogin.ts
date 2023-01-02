import invalid from "./invalid";
import login from "./login";

const { I } = inject();

export = {
beforeLogin() {
    I.fillField(login.locator.UserName , 'jiniya+1+admin@itobuz.com');
    I.click(login.locator.continueBtn);
    I.fillField(login.locator.password , 'Password@50');
    I.see('Show Password');
    I.wait(1);
    I.click(login.locator.showPassword);
    I.click(login.locator.submitBtn);
    I.see('Events');
 }};

