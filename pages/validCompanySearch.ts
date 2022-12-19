const { I } = inject();

export = {
  
  async validComapanySearch()  {
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
  I.wait(3);
  I.click('[data-test-id="floating-btn"]')
  I.limitTime(2).click('[data-testid="note-create"]');
  I.fillField('[class="pb-4"] input' , 'This is pretaa health');
  I.wait(1);
  I.fillField('[class="quill "] p:nth-child(1)' , 'Pretaa health app is good');
  I.click('[type="submit"]');
  I.wait(2);
 
}
}