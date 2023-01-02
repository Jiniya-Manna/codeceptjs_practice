import invalid from "../pages/invalid";
import loginPage from "../pages/login";
import settingpage from "../pages/settingpage";
import setting from "../pages/settingpage";
Feature('setting_test');
var faker = require ('faker')
Scenario('go to setting', async ({ I }) => {
    loginPage.login()
    I.click(settingpage.locator.settingLink);
    I.wait(1);
});
Scenario('go to group search', async ({ I }) => { 
    setting.settingpage()

});
