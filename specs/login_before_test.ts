import beforelogin from "../pages/beforeLogin";
import invalid from "../pages/invalid";
Feature('Login');
Before(({I}) => {
    I.amOnPage('/login')
  });
Scenario('Successful login', ({I}) => {
    beforelogin.beforeLogin()
});
After(({I}) => { 
    I.click(invalid.locator.logOut);
});