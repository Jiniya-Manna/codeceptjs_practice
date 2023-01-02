import loginPage  from  "../pages/login";
import launchEmailPage from  "../pages/launchEmail";
Feature('pretaa_comments_test');
Scenario('Select random company', async ({I}) => {
 loginPage.login();
 launchEmailPage.launchEmailA();
});