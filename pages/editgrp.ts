import settingpage from "./settingpage";
const { I } = inject();
export = {
  locator:{
    group:'[href="/settings/admin/user-groups"]',
    popup:'[data-test-id="pop-over-trigger-el"]',
    editBtn:'[data-test-id="options"]:nth-child(2)'
},
  editgrpA() {
  I.click(settingpage.locator.settingLink);
  I.click(settingpage.locator.user);
  I.click(this.locator.group);
  I.click(this.locator.popup);
  I.click(this.locator.editBtn);
  I.fillField(settingpage.locator.grpInputFiled, 'testing');
  I.click(settingpage.locator.saveBtn);
}
}