import loginPage from "../pages/login";
import validCompanySearch  from "../pages/validCompanySearch";
Feature('validCompany');
Scenario('valid company', async ({ I }) => {
loginPage.login();
validCompanySearch.validComapanySearch()
I.click('[href="/logout"]');
I.wait(2);

})