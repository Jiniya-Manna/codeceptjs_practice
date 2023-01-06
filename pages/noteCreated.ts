import invalid from "./invalid";

const { I } = inject();

export = {

locator:{
  companylist:'[data-test-id="company-row"]',
  floatBtn: '[data-test-id="floating-btn"]',
  noteCreated:'[data-testid="note-create"]',
  noteTitleBar:'[name="subject"]',
  noteDetails:'[class="ql-editor ql-blank"]',
  submitBtn:'[type="submit"]'
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
  I.limitTime(2).click(this.locator.noteCreated);
  I.waitForElement(this.locator.noteTitleBar);
  I.wait(2);
  I.fillField( this.locator.noteTitleBar, 'Pretaa');
  I.wait(2);
  I.fillField( this.locator.noteDetails, ' Preta app is good ');
  I.click(this.locator.SubmitBtn);
  I.see('Note created successfully');
  I.wait(3);
}
}

