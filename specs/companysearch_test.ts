
import loginPage from "../pages/login";
import validComapanySearchPage from "../pages/validCompanySearch"
Feature('invalidSearch');
Scenario('valid company search', ({ I  }) => {
loginPage.login() 
validComapanySearchPage.validComapanySearch()
});
import invalidPage from "../pages/invalid"
Feature('invalidSearch');
Scenario('invalid company search', ({ I  }) => {
loginPage.login() 
invalidPage.invalid()

});