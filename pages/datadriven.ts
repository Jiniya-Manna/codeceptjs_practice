import login from "./login";

const { I,current } = inject();

export = {
  datadrivenA() {
  
  I.fillField(login.locator.UserName ,current.login);
  I.click(login.locator.continueBtn);
  I.wait(1);
  I.fillField(login.locator.password ,current.password);
  I.click(login.locator.submitBtn);
  I.wait(3);
  I.see('Events');
  I.click(login.locator.logout);
}
}
