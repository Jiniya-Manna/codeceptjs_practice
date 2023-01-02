import  Locator  from "codeceptjs";
const { I } = inject();
var faker = require ('faker')
export = {
  locator: {
    companyListlink:'[href="/companies/list"]',
    searchBar: '[data-testid="search-input"]',
    logOut:'[href="/logout"]',
  },

    invalidA() {
    I.click(this.locator.companyListlink);
    I.wait(3)
    let  words = faker.random.words();
    I.fillField(this.locator.searchBar , words);
    I.see("No results");
    I.click(this.locator.logOut);
    I.wait(2);
  }
}
