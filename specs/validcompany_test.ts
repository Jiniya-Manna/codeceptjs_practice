import loginPage from "../pages/login";
import validComapanySearch  from "../pages/validCompanySearch";


Feature('validCompany');
Scenario('valid company', async ({ I }) => {
loginPage.login();
validComapanySearch.validComapanySearch()

})