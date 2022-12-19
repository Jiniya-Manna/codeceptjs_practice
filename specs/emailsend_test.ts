import loginPage  from "../pages/login";
import validCompanySearch from "../pages/validCompanySearch"
//import launchPage from "../pages/launch";

Feature('pretaa_comments_test');

Scenario('Select random company', async ({I}) => {
 loginPage.login();
 //validCompanySearch.validComapanySearch();
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
 I.seeElement('[data-test-id="company-list-link"]');
 I.wait(2)
 I.click('[data-test-id="floating-btn"]');
    //I.seeElement('[data-test-id="page-title"]');
 I.wait(5);
 I.click('[data-testid="launch"] [class="flex items-center"]');
 I.seeElement('[data-test-id="page-title"]');
 I.wait(2);
 I.click('[alt="filled-icon"]');
 I.click("//div[@id='react-select-2-option-2']/div/label");
 I.pressKey("Enter");
 I.wait(2);
 I.click('[type="submit"]');
 I.see('Launch');
 I.fillField('[data-test-id="email-input"]','salma@itobuz.com');
 I.click('[data-testid="preview-btn"]')
 I.click('[data-testid="launch-btn"]');
 I.wait(2);
 I.see('Launch Detail'); 
 I.wait(2);   
 //launchPage.launch();
 }
);