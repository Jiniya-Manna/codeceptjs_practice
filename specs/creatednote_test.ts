import loginPage from "../pages/login";
import validCompanySearchPage  from "../pages/validCompanySearch";
//import companynotePage from  "../pages/companynote";
Feature('noteCreated_test');
Scenario('go to note', async ({ I }) => {
    
    loginPage.login();
    validCompanySearchPage.validComapanySearch()
    //companynotePage.companynote()
    I.click('[data-test-id="floating-btn"]');
    I.see('NOTE');
    I.click('[data-test-id="options"]');
    I.see('New Note');
    I.fillField('[name="subject"]' , 'Pretaa');
    I.click('[type="submit"]');
    //I.see('This field is required');
    I.fillField('[data-placeholder="Add Details"]' , ' Preta app is good ');
    I.click('[type="submit"]');
    I.wait(3);
    //I.see('Please type a text');
});
