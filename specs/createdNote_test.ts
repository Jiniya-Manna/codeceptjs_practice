import loginPage from "../pages/login";
import validComapanySearchPage from "../pages/validCompanySearch"
Feature('invalidSearch');
Scenario('valid company search', ({ I  }) => {
loginPage.login();
validComapanySearchPage.validComapanySearch();
//I.click('[data-test-id="floating-btn"]');
});