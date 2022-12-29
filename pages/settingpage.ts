const { I } = inject();
export = {
  locator:{
    settingLink: '[href="/settings/preferences/profile"]',
  },
settingpage()  {
  I.click(this.locator.settingLink);
  I.wait(1);
  I.click('.pl-4 div:nth-child(4) h3');
  I.click('[href="/settings/admin/user-groups"]');
  I.wait(2);
  I.click('[data-testid="content-frame"] div:nth-child(4) [data-test-id="popup-btn"] div:nth-child(1)');
  I.wait(1);
  I.click('[data-test-id="options"] div:nth-child(1)');
  I.seeElement('[data-test-id="page-title"]');
  I.click('[type="submit"]:nth-child(1)');
  I.wait(2);  
}
}
