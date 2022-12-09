import loginPage from "../pages/login";
import settingpagePage from "../pages/settingpage";
Feature('creategroup');
Scenario('go to group creation',async ({ I }) => { 
loginPage.login()
settingpagePage.settingpage()
});