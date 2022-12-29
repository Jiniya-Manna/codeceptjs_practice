import invalid from "./invalid";

const { I } = inject();
export = {
 async validcompanySearch()  {
 I.click(invalid.locator.companyListlink);
 I.wait(3);
 let companyList = await I.grabTextFromAll('[data-test-id="company-row"]');
 console.log(companyList);
 let random = Math.floor(Math.random() * companyList.length);
 console.log(random)
 let x=companyList[random]
 I.fillField(invalid.locator.searchBar, x);
 I.wait(2);
 I.click(x);
 I.wait(3);
 I.click(invalid.locator.logOut);
 I.wait(2);
  }
}