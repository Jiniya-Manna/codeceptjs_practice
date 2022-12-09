const { I } = inject();

export = {
 async companylist() {
    
  I.click('[href="/companies/list"]');
  I.wait(3)
  let companylist = await I.grabTextFromAll('[data-test-id="company-row"]');
  console.log(companylist);
  let random = Math.floor(Math.random() * companylist.length);
  console.log(random)
  let x=companylist[random]
  I.fillField('[data-testid="search-input"]', x);
  I.wait(2);
  I.click(x);
  I.seeElement('[data-test-id="page-title"]');
  I.see(x);
}
};