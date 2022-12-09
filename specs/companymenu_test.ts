import loginPage  from "../pages/login";
import companylistPage from "../pages/companylist";


Feature('pretaacomments_test');

Scenario('Select random company', ({I}) => {
  I.amOnPage('/login');
  loginPage.login();
  I.see('Companies');
  companylistPage.companylist();
  

});