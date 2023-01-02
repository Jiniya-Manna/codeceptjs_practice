import invalid from "./invalid";

const { I } = inject();

export = {

locator:{
  companylist:'[data-test-id="company-row"]',
  floatBtn: '[data-test-id="floating-btn"]',
  NoteCreated:'[data-testid="note-create"]',
  NoteTitleBar:'[name="subject"]',
  NoteDetails:'[data-placeholder="Add Details"]',
  SubmitBtn:'[type="submit"]'
},
   async noteCreated() {
  I.click(invalid.locator.companyListlink);
  I.wait(3)
  let companyList = await I.grabTextFromAll(this.locator.companylist);
  console.log(companyList);
  let random = Math.floor(Math.random() * companyList.length);
  console.log(random)
  let x=companyList[random]
  I.fillField(invalid.locator.searchBar, x);
  I.wait(2);
  I.click(x);
  I.wait(3);
  I.click(this.locator.floatBtn);
  I.limitTime(2).click(this.locator.NoteCreated);
  I.waitForElement(this.locator.NoteTitleBar);
  I.fillField( this.locator.NoteTitleBar, 'Pretaa');
  I.wait(2);
  I.fillField( this.locator.NoteDetails, ' Preta app is good ');
  I.wait(5);
  I.click(this.locator.SubmitBtn);

}
}

