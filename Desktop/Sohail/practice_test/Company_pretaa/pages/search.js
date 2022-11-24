const { I } = inject();

module.exports = {
  locatot:{
    companylist:'[href="/companies/list"]',
    title:'[data-test-id="page-title"]',
    searchfield:'[data-testid="search-input"]',
    searchoption:'[data-testid="search-input"]',
    companyname:'[data-test-id="company-list-link"]',
},

search() {
    
    I.click(this.locatot.companylist);
    I.seeElement(this.locatot.title);
    I.click(this.locatot.searchfield);
    I.fillField (this.locatot.searchoption, 'Corwin');
    I.seeElement(this.locatot.companyname);
    I.waitForElement(this.locatot.companyname, 4);
}
}
  
