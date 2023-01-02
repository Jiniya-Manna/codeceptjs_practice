import invalid from "./invalid";
import noteCreated from "./noteCreated";

const { I } = inject();
export = {
 async validcompanySearch()  {
 I.click(invalid.locator.companyListlink);
 I.wait(3);
 let companyList = await I.grabTextFromAll(noteCreated.locator.companylist);
 console.log(companyList);
 let random = Math.floor(Math.random() * companyList.length);
 console.log(random)
 let companyRandomValue=companyList[random]
 I.fillField(invalid.locator.searchBar, companyRandomValue);
 I.wait(2);
 I.click(companyRandomValue);
 I.wait(3);
 I.click(invalid.locator.logOut);
 I.wait(2);
  }
}