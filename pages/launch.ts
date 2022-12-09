const { I } = inject();

export = {
  async launch () {

    I.seeElement('[data-test-id="company-list-link"]');
    I.wait(2)
    I.click('[data-test-id="floating-btn"]');
    I.seeElement('[data-test-id="page-title"]');
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

  }
  };