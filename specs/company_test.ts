import loginPage from "../pages/login";
import validcompanySearchPage from "../pages/validcompanySearch";
//import invalidPage from "../pages/invalid"
Feature('validSearch');
Scenario('valid company search', ({ I }) => {
loginPage.login();
validcompanySearchPage.validcompanySearch()
});
//import loginPage from "../pages/login";
import invalidPage from "../pages/invalid"
Feature('invalidSearch');
Scenario('invalid company search', ({ I }) => {
loginPage.login() 
invalidPage.invalidA()
});