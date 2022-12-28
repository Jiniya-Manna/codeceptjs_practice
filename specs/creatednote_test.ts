import loginPage from "../pages/login";
import validCompanySearch  from "../pages/validCompanySearch";
Feature('noteCreated');
Scenario('go to note', async ({ I }) => {
    
    loginPage.login();
    //validCompanySearch.validComapanySearch()
    I.click('[href="/companies/list"]');
    I.wait(3)
    let companyList = await I.grabTextFromAll('[data-test-id="company-row"]');
    console.log(companyList);
     let random = Math.floor(Math.random() * companyList.length);
    console.log(random)
    let x=companyList[random]
    I.fillField('[data-testid="search-input"]', x);
    I.wait(2);
    I.click(x);
    I.see('Details');
    I.wait(3);
    I.click('[data-test-id="floating-btn"]');
    I.wait(2);
    I.click('[data-testid="note-create"]');
    I.wait(2);
    I.fillField('[name="subject"]' , 'Pretaa');
    I.fillField('[data-placeholder="Add Details"]' , ' Preta app is good ');
    I.wait(2);
    I.click('[type="submit"]');
    I.wait(3);
});
