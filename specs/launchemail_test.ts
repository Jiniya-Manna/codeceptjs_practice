import loginPage  from "../pages/login";

import companylistPage from "../pages/companylist";
import launchPage from "../pages/launch";


Feature('pretaa_comments_test');

Scenario('Select random company', async ({I}) => {
 await loginPage.login();
 I.see('Companies');
 await companylistPage.companylist();
 await launchPage.launch();
  
}
);


