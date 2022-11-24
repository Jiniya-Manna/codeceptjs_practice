let faker = require('faker');
const { I } = inject();

module.exports = {

  locatot: {
    companyname:'[href="/companies/list"]',
    pagetitle:'[data-test-id="page-title"]',
  },
  
companysearch() {
    I.click(this.locatot.companyname);
    I.seeElement(this.locatot.pagetitle);
    I.click('[data-testid="search-input"]');
    let companyfname = faker.name.firstName()
    I.fillField('[data-testid="search-input"]' , companyfname);
    I.seeElement('[data-test-id="page-title"]');
    I.wait(2);
    I.see('No result');
}
  }
